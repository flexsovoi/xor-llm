import DashedBorderBox from "@/abstract/components/DashedBorderBox/DashedBorderBox"
import ImageContainer from "@/abstract/components/ImageContainer/ImageContainer"
import SubTitle from "@/abstract/components/SubTitle/SubTitle"

const Year2017 = () => {
	return (
		<div className="sc-gap-[24px] flex">
			<DashedBorderBox
				viewBox="0 0 248 503"
				className='"sc-p-5 sc-w-[248px] sc-h-[523px]'
			>
				<div className="sc-p-5 sc-w-[250px]">
					<SubTitle>2017</SubTitle>
					<p className="font-onest sc-text-4 text-[#525252]">
						Переломный момент: начало эры трансформеров
					</p>
				</div>
				<div className="sc-left-[140px] absolute flex">
					<ImageContainer
						fit="cover"
						src={"/images/image-7.png"}
						className="sc-w-[307px] sc-h-[347px] rotate-[0.5]"
					/>
				</div>
			</DashedBorderBox>
			<div className="sc-gap-4 sc-mt-5 flex flex-col">
				<p className="font-onest sc-text-5 sc-w-[690px]">
					В 2017 группа исследователей из Google совершила главный нейросетевой
					прорыв начала 21 века: они выпустили статью “Attention is All You
					Need”, в которой впервые описали архитектуру{" "}
					<span className="font-bold">трансформера</span> .
				</p>
				<div className="sc-gap-4 sc-ml-[205px] flex flex-col">
					<p className="font-onest sc-text-5 text-[#464646]">
						<span className="font-bold">Сегодня трансформеры</span> лежат в
						основе всех LLM.
					</p>{" "}
					<p className="font-onest sc-text-5 text-[#464646]">
						Ключевая идея была в использовании только одного механизма — 
						<span className="font-bold text-nowrap">self-attention</span>
						 («самовнимание»). Именно благодаря вниманию сети научились лучше
						понимать контекст и писать связные длинные тексты.
					</p>
					<div className="bg-myblue sc-h-[180px] sc-p-4 sc-text-4 w-full rounded-xl border">
						<p className="font-onest sc-text-4 font-semibold">
							Трансформеры стали прорывом, потому что:
						</p>
						<p className="sc-gap-2 font-onest sc-text-4 flex items-baseline font-medium">
							<span className="sc-w-3 sc-h-3 sc-border-4 rounded-full"></span>
							смогли эффективно обрабатывать длинные тексты
						</p>
						<p className="sc-gap-2 font-onest flex items-baseline font-medium">
							<span className="sc-w-3 sc-h-3 sc-border-4 rounded-full"></span>
							позволили распараллеливать обучение (работают быстрее
							и эффективнее)
						</p>
						<p className="sc-gap-2 font-onest flex items-baseline font-medium">
							<span className="sc-w-3 sc-h-3 sc-border-4 rounded-full"></span>
							значительно улучшили качество всех речевых задач (перевод,
							классификация, генерация текстов)
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Year2017
