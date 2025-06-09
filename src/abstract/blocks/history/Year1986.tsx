import DashedBorderBox from "@/abstract/components/DashedBorderBox/DashedBorderBox"
import ImageContainer from "@/abstract/components/ImageContainer/ImageContainer"
import SubTitle from "@/abstract/components/SubTitle/SubTitle"

const Year1986 = () => {
	return (
		<div className="sc-gap-[24px] flex">
			<DashedBorderBox
				viewBox="0 0 248 418"
				className='"sc-p-5 sc-w-[248px] sc-h-[418px]'
			>
				<div className="sc-p-5 sc-w-[250px]">
					<SubTitle>1986</SubTitle>
					<p className="font-onest sc-text-4 text-[#525252]">
						Мы научились эффективно обучать нейросети
					</p>
				</div>
				<ImageContainer
					fit="contain"
					src={"/images/image-3.png"}
					className="sc-w-[537px] sc-h-[260px] sc-left-[40px] relative"
				/>
			</DashedBorderBox>
			<div className="sc-gap-4 sc-mt-5 sc-mt-5 flex flex-col">
				<p className="font-onest sc-text-5 text-[#525252]">
					Ещё одно открытие, за которое учёные получили Нобелевскую премию —{" "}
					<span className="font-bold text-black">
						метод обратного распространения ошибки (Backpropagation).
					</span>{" "}
					Сегодня это канон. Этим методом обучаются абсолютно все нейросети,
					которые нас окружают.
				</p>
			</div>
		</div>
	)
}

export default Year1986
