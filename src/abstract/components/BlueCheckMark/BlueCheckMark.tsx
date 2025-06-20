const BlueCheckMark = () => {
	return (
		<svg
			className="sc-w-[17px] sc-h-[17px]"
			viewBox="0 0 17 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.00016 14.6673C4.31816 14.6673 1.3335 11.6827 1.3335 8.00065C1.3335 4.31865 4.31816 1.33398 8.00016 1.33398C11.6822 1.33398 14.6668 4.31865 14.6668 8.00065C14.6668 11.6827 11.6822 14.6673 8.00016 14.6673ZM7.3355 10.6673L12.0488 5.95332L11.1062 5.01065L7.3355 8.78198L5.4495 6.89598L4.50683 7.83865L7.3355 10.6673Z"
				fill="#5DFBFB"
			/>
			<path
				d="M8.00049 0.833984C11.9585 0.83416 15.1665 4.04294 15.1665 8.00098C15.1663 11.9589 11.9584 15.1668 8.00049 15.167C4.04245 15.167 0.833672 11.959 0.833496 8.00098C0.833496 4.04283 4.04235 0.833984 8.00049 0.833984ZM7.68896 9.13574L7.33545 9.48926L5.44971 7.60352L5.21436 7.83887L7.33447 9.95898L11.3413 5.95312L11.106 5.71777L7.68896 9.13574Z"
				stroke="#151515"
			/>
		</svg>
	)
}

export default BlueCheckMark
export const BlueNumberMark = ({ number }: { number: number }) => (
	<div className="sc-h-[25px] sc-w-[25px] relative flex items-center justify-center">
		<span className="sc-text-[14px] font-onest -sc-ml-[3px] absolute z-10 text-center font-semibold text-[#151515]">
			{number}
		</span>
		<svg
			width={25}
			height={25}
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="relative"
		>
			<g filter="url(#filter0_d_1_3454)">
				<rect
					width={24}
					height={24}
					rx={12}
					fill="#5DFBFB"
					shapeRendering="crispEdges"
				/>
				<rect
					x={0.5}
					y={0.5}
					width={23}
					height={23}
					rx={11.5}
					stroke="#151515"
					shapeRendering="crispEdges"
				/>
			</g>
		</svg>
	</div>
)
