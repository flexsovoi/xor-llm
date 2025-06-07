import DashedBorderBox from "@/abstract/components/DashedBorderBox/DashedBorderBox"
import ImageContainer from "@/abstract/components/ImageContainer/ImageContainer"
import InfoBox from "@/abstract/components/InfoBox/InfoBox"
import SubTitle from "@/abstract/components/SubTitle/SubTitle"

const Year1997 = () => {
	return (
		<div className="sc-gap-[24px] flex">
			<DashedBorderBox
				viewBox="0 0 248 418"
				className='"sc-p-5 sc-w-[248px] sc-h-[418px]'
			>
				<div className="sc-p-5 sc-w-[250px]">
					<SubTitle>1997</SubTitle>
					<p className="font-onest sc-text-4 text-[#525252]">
						Мы научились эффективно обучать нейросети
					</p>
				</div>
				<div className="sc-left-[40px] sc-bottom-12 absolute flex">
					<ImageContainer
						src={"/images/image-4.jpg"}
						className="sc-w-[205px] sc-h-[191px] -rotate-2"
					/>
					<div className="sc-w-[270px] sc-right-3 sc-top-12 relative">
						<InfoBox arrowPosition="left" arrowOffset="37px">
							<p className="font-onest sc-text-5 sc-p-4 text-[#707070]">
								В RNN память устроена очень примитивно
							</p>
						</InfoBox>
					</div>
				</div>
			</DashedBorderBox>
			<div className="sc-gap-4 flex flex-col">
				<p className="font-onest sc-text-5 text-[#525252]">
					В этом году появились{" "}
					<span className="font-bold text-black">
						LSTM (Long Short-Term Memory)
					</span>
					 — особый тип рекуррентных RNN. Их название буквально означает «долгая
					кратковременная память», то есть они способны сохранять контекст и, в
					отличие от обычных RNN, учитывать долгосрочные зависимости в данных.{" "}
					<span className="font-bold text-black">
						Именно LSTM стали первыми языковыми моделями.
					</span>
				</p>
				<div className="flex self-end">
					<ImageContainer
						src={"/images/image-5.png"}
						className="sc-w-[205px] sc-h-[191px] -rotate-2"
					/>
					<div className="sc-w-[270px] sc-right-2 relative">
						<InfoBox arrowPosition="left" arrowOffset="75px">
							<div className="sc-p-4 flex h-fit flex-col rounded-[8px] border bg-[#5DFBFB]">
								<p className="font-onest sc-text-4 font-medium">
									В LSTM все намного сложнее: предусмотрены механизмы забывания,
									восстановления и удержания информации
								</p>
							</div>
						</InfoBox>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Year1997
