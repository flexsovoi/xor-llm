import DashedBorderBox from "@/abstract/components/DashedBorderBox/DashedBorderBox"
import InfoBox from "@/abstract/components/InfoBox/InfoBox"
import SubTitle from "@/abstract/components/SubTitle/SubTitle"

const Year2024 = () => {
	return (
		<div className="sc-gap-[24px] flex">
			<DashedBorderBox
				viewBox="0 0 248 316"
				className='"sc-p-5 sc-w-[248px] sc-h-[316px]'
			>
				<div className="sc-p-5 sc-w-[250px]">
					<SubTitle>2024</SubTitle>
					<p className="font-onest sc-text-4 text-[#525252]">o1</p>
				</div>
			</DashedBorderBox>
			<div className="sc-gap-3 sc-mt-5 flex flex-col items-center">
				<p className="font-onest sc-text-5 font-medium">
					Модели могут становиться умнее за счет:
				</p>
				<svg
					className="sc-w-[316px] sc-h-[52px]"
					viewBox="0 0 316 52"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16 44.5789C12.1817 44.5789 9 47.8525 9 52L7 52C7 47.8525 3.81828 44.5789 -1.49539e-07 44.5789L-4.11807e-07 42.5789C2.84565 42.5789 5.35799 43.951 7 46.0788L7 32L9 32L9 46.0788C10.642 43.951 13.1544 42.5789 16 42.5789L16 44.5789Z"
						fill="#151515"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M316 44.5789C312.182 44.5789 309 47.8525 309 52L307 52C307 47.8525 303.818 44.5789 300 44.5789L300 42.5789C302.846 42.5789 305.358 43.951 307 46.0788L307 32L309 32L309 46.0788C310.642 43.951 313.154 42.5789 316 42.5789L316 44.5789Z"
						fill="#151515"
					/>
					<path
						d="M8 32V18.5C8 15.1863 10.6863 12.5 14 12.5H146C149.314 12.5 152 9.81371 152 6.5V0"
						stroke="#151515"
						strokeWidth="2"
					/>
					<path
						d="M308 32V18.5C308 15.1863 305.314 12.5 302 12.5H158C154.686 12.5 152 9.81371 152 6.5V0"
						stroke="#151515"
						strokeWidth="2"
					/>
				</svg>
				<div className="flex justify-center">
					<div className="-sc-mr-6 flex w-2/5 justify-end">
						<p className="sc-p-4 sc-text-5 w-3/4 rounded-xl border font-medium">
							Роста количества обучающих данных и параметров
						</p>
					</div>
					<div className="w-3/5">
						<p className="sc-p-4 sc-text-5 sc-ml-10 w-4/5 rounded-xl border font-medium">
							Длительности рассуждений LLM во время инференса (то есть
							непосредственно работы)
						</p>
					</div>
				</div>
				<div className="sc-gap-3 sc-w-[772px] relative right-[60px] flex justify-between">
					<div className="sc-w-[388px]">
						<InfoBox arrowPosition="top" arrowOffset="280px" isBorder={false}>
							<div className="bg-myblue 4 sc-p-4 sc-gap-3 sc-text-4 flex flex-col rounded-lg border">
								<p className="font-medium text-[#151515]">
									Вот об этом мы знали давно. Но бесконечно масштабировать сети
									таким образом не получится.
								</p>
								<p className="font-medium text-[#151515]">
									Во‑первых, кончатся человеческие данные.{" "}
								</p>
								<p className="font-medium text-[#151515]">
									Во‑вторых, модели станут просто неподъёмными
									для использования.
								</p>
							</div>
						</InfoBox>
					</div>
					<div className="sc-w-[372px]">
						<InfoBox arrowPosition="top" arrowOffset="181px" isBorder={false}>
							<div className="bg-myblue sc-p-4 sc-gap-3 sc-text-4 flex flex-col rounded-lg border">
								<p className="font-medium text-[#151515]">
									Вот эту идею доказала как раз модель o1, выпущенная OpenAI:
									она стала думать перед ответом.{" "}
								</p>{" "}
								<p className="font-medium text-[#151515]">
									Это называется ризонинг, и он стал новым словом в LLM.
								</p>
								<p className="font-medium text-[#151515]">
									Оказалось, что чем её длиннее рассуждения модели, тем точнее
									ответы она даёт. Некоторые считают, что именно ризонинг
									приведёт нас к AGI.
								</p>
							</div>
						</InfoBox>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Year2024
