import DashedBorderBox from "@/abstract/components/DashedBorderBox/DashedBorderBox"
import ImageContainer from "@/abstract/components/ImageContainer/ImageContainer"
import SubTitle from "@/abstract/components/SubTitle/SubTitle"

const Year2022 = () => {
	return (
		<div className="sc-gap-[24px] flex">
			<DashedBorderBox
				viewBox="0 0 248 316"
				className='"sc-p-5 sc-w-[248px] sc-h-[316px]'
			>
				<div className="sc-p-5 sc-w-[250px]">
					<SubTitle>2022</SubTitle>
					<p className="font-onest sc-text-4 text-[#525252]">ChatGPT</p>
				</div>
				<div className="sc-left-[20px] absolute flex">
					<ImageContainer
						fit="cover"
						src={"/images/image-9.png"}
						className="sc-w-[215px] sc-h-[156px] rotate-[0.5]"
					/>
				</div>
			</DashedBorderBox>
			<div className="sc-gap-4 sc-mt-5 flex flex-col">
				<p className="font-onest sc-text-5 text-[#464646]">
					Момент, когда <span className="font-bold text-[#000]">LLM</span> вышли
					в массы. <span className="font-bold text-black">OpenAI</span>{" "}
					в это время была все ещё не слишком заметной ML-лабораторией,
					даже после выхода <span className="font-bold text-black">GPT-3</span>.
					Общественность не обращала внимание на ИИ. Но все изменилось, когда
					они придумали{" "}
					<span className="font-bold text-black">
						ChatGPT — первого полноценного чат-бота, к которому доступ
						мог получить каждый
					</span>
					.
				</p>
				<p className="font-onest sc-text-5 text-[#464646]">
					Интересный факт:{" "}
					<span className="font-bold text-black">
						ChatGPT вообще планировался как маленький эксперимент
					</span>{" "}
					и демо возможностей ИИ для сообщества, а никак не полноценный основной
					продукт. Тем не менее, именно ChatGPT послужил катализатором
					начавшегося ИИ-бума.
				</p>
			</div>
		</div>
	)
}

export default Year2022
