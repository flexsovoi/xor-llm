import SubTitle from "@/abstract/components/SubTitle/SubTitle"

const Year1957 = () => {
	return (
		<div>
			<svg
				className="sc-w-0.5 sc-h-[33px] sc-ml-[42px] sc-mt-1"
				viewBox="0 0 2 33"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke="#C8C8C8"
					strokeWidth="2"
					strokeLinecap="round"
					strokeDasharray="7 7"
				/>
			</svg>
			<div className="sc-gap-[24px] flex">
				<div className="sc-h-[710px] relative">
					<svg
						viewBox="0 0 250 710"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute h-full"
					>
						<rect
							x={1}
							y={1}
							width={248}
							height={478}
							rx={20}
							stroke="#C8C8C8"
							strokeWidth={2}
							strokeLinecap="round"
							strokeDasharray="12 12"
						/>
					</svg>
					<div className="sc-p-5 sc-w-[248px] relative">
						<SubTitle>1957</SubTitle>
						<small className="font-onest text-[#828282]">
							Люди изобретают первую модель нейрона мозга
						</small>
					</div>
				</div>
				<p className="font-onest sc-text-5">
					Фрэнком Розенблаттом был изобретен перцептрон — простейшая нейронная
					сеть и первую математическую модель нейрона мозга. Вот как перцептрон
					выглядел:
				</p>
			</div>
		</div>
	)
}

export default Year1957
