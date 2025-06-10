const BlueCheckMark = () => {
	return (
		<svg
			className="sc-w-[17px] sc-h-[17px]"
			viewBox="0 0 17 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_d_1_3209)">
				<path
					d="M8.00016 14.6673C4.31816 14.6673 1.3335 11.6827 1.3335 8.00065C1.3335 4.31865 4.31816 1.33398 8.00016 1.33398C11.6822 1.33398 14.6668 4.31865 14.6668 8.00065C14.6668 11.6827 11.6822 14.6673 8.00016 14.6673ZM7.3355 10.6673L12.0488 5.95332L11.1062 5.01065L7.3355 8.78198L5.4495 6.89598L4.50683 7.83865L7.3355 10.6673Z"
					fill="#5DFBFB"
				/>
				<path
					d="M8.00049 0.833984C11.9585 0.83416 15.1665 4.04294 15.1665 8.00098C15.1663 11.9589 11.9584 15.1668 8.00049 15.167C4.04245 15.167 0.833672 11.959 0.833496 8.00098C0.833496 4.04283 4.04235 0.833984 8.00049 0.833984ZM7.68896 9.13574L7.33545 9.48926L5.44971 7.60352L5.21436 7.83887L7.33447 9.95898L11.3413 5.95312L11.106 5.71777L7.68896 9.13574Z"
					stroke="black"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_1_3209"
					x={0.333496}
					y={0.333984}
					width={16.3335}
					height={16.334}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dx={1} dy={1} />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 1 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_1_3209"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_1_3209"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	)
}

export default BlueCheckMark
export const BlueNumberMark = ({ number }: { number: number }) => (
	<svg
		width={25}
		height={25}
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
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
			<span className="sc-text-[14px] font-onest font-semibold text-[#151515]">
				{number}
			</span>
		</g>
		<defs>
			<filter
				id="filter0_d_1_3454"
				x={0}
				y={0}
				width={25}
				height={25}
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB"
			>
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dx={1} dy={1} />
				<feComposite in2="hardAlpha" operator="out" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 0 0.0823529 0 0 0 1 0"
				/>
				<feBlend
					mode="normal"
					in2="BackgroundImageFix"
					result="effect1_dropShadow_1_3454"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_dropShadow_1_3454"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
)
