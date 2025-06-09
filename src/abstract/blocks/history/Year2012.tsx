import { BluePoint } from "@/abstract/components/BluePoint/BluePoint"
import DashedBorderBox from "@/abstract/components/DashedBorderBox/DashedBorderBox"
import ImageContainer from "@/abstract/components/ImageContainer/ImageContainer"
import SubTitle from "@/abstract/components/SubTitle/SubTitle"

const Year2012 = () => {
	return (
		<div className="sc-gap-[24px] flex">
			<DashedBorderBox
				viewBox="0 0 248 316"
				className='"sc-p-5 sc-w-[248px] sc-h-[316px]'
			>
				<div className="sc-p-5 sc-w-[250px]">
					<SubTitle>2012</SubTitle>
					<p className="font-onest sc-text-4 text-[#525252]">AlexNet</p>
				</div>
				<div className="sc-left-[40px] absolute flex">
					<ImageContainer
						fit="cover"
						src={"/images/image-6.png"}
						className="sc-w-[265px] sc-h-[182px] rotate-[0.5]"
					/>
				</div>
			</DashedBorderBox>
			<div className="sc-gap-4 sc-mt-5 flex flex-col">
				<p className="font-onest sc-text-5">
					Алекс Крижевский, Илья Суцкевер и Джеффри Хинтон создали модель
					AlexNet, глобально изменившую мир компьютерного зрения и положившую
					начало новой эпохе глубокого обучения.
				</p>
				<div className="sc-gap-2 sc-ml-[52px] flex flex-col">
					<p className="font-onest sc-text-5 text-[#464646]">
						Они впервые доказали, что:
					</p>
					<div className="sc-gap-2 flex items-baseline">
						<BluePoint />
						<p className="font-onest sc-text-5 sc-w-[380px] font-medium">
							Модели становятся умнее с ростом числа обучающих данных
						</p>
					</div>
					<div className="sc-gap-2 flex items-baseline">
						<BluePoint />
						<p className="font-onest sc-text-5 sc-w-[378px] font-medium">
							Модели нужно обучать на GPU, а не на CPU
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Year2012
