import { BluePoint } from "@/abstract/components/BluePoint/BluePoint"
import DashedBorderBox from "@/abstract/components/DashedBorderBox/DashedBorderBox"
import ImageContainer from "@/abstract/components/ImageContainer/ImageContainer"
import SubTitle from "@/abstract/components/SubTitle/SubTitle"

const Year2020 = () => {
	return (
		<div className="sc-gap-[24px] flex">
			<DashedBorderBox
				viewBox="0 0 248 332"
				className='"sc-p-5 sc-w-[248px] sc-h-[332px]'
			>
				<div className="sc-p-5 sc-w-[250px]">
					<SubTitle>2020</SubTitle>
					<p className="font-onest sc-text-4 text-[#525252]">GPT-3</p>
				</div>
				<div className="sc-left-[20px] absolute flex">
					<ImageContainer
						fit="cover"
						src={"/images/image-8.png"}
						className="sc-w-[207px] sc-h-[196px] rotate-[0.5]"
					/>
				</div>
			</DashedBorderBox>
			<div className="sc-gap-4 sc-mt-5 flex flex-col">
				<p className="font-onest sc-text-5 text-[#464646]">
					До появления GPT-3 нейросети уже умели генерировать текст,
					но всё ещё были сильно ограничены. GPT-3 показал настоящий потенциал
					LLM:
				</p>
				<div className="sc-gap-[6px] flex flex-col">
					<div className="sc-gap-3 sc-text-5 flex items-baseline">
						<BluePoint />
						<p className="font-onest sc-w-[680px] font-medium">
							GPT-3 состоял из 175 миллиардов параметров: примерно
							в 10 раз больше предыдущих крупнейших моделей.
						</p>
					</div>
					<div className="sc-gap-3 sc-text-5 flex items-baseline">
						<BluePoint />
						<p className="font-onest sc-w-[680px] font-medium">
							Модель зафайнтюнили так, что она смогла решать даже те задачи,
							на которых не была специально обучена.
						</p>
					</div>
					<div className="sc-gap-3 sc-text-5 flex items-baseline">
						<BluePoint />
						<p className="font-onest sc-w-[680px] font-medium">
							Качество текста впервые стало почти человеческим
						</p>
					</div>
				</div>
				<div className="sc-p-4 bg-myblue rounded-xl border">
					<p className="font-onest sc-text-4 font-medium">
						В профессиональном сленге до сих пор используется выражение “GPT-3
						moment” для обозначения чего-то переломного, чего-то, что полностью
						изменило рынок.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Year2020
