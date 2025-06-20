import { BluePoint } from "@/abstract/components/BluePoint/BluePoint"
import InfoBox from "@/abstract/components/InfoBox/InfoBox"
import VerticalDashedLine from "@/abstract/components/VerticalDashedLine/VerticalDashedLine"

const AiWinter = () => {
	return (
		<div className="sc-gap-4 sc-mt-5 flex">
			<VerticalDashedLine
				className="sc-h-[200px] sc-ml-[42px] -sc-mt-3"
				height={200}
			/>
			<div className="sc-w-[595px] sc-h-[136px]">
				<InfoBox arrowOffset="50px" arrowPosition="left" isBorder={false}>
					<div className="sc-p-4 flex h-fit flex-col rounded-lg border bg-[#5DFBFB]">
						<p className="font-onest sc-text-5 font-medium">
							В этот период (70-е годы) случилась так называемая «ИИ—зима»
							Интерес общества и финансирование исследований сильно сократились,
							а многие проекты были приостановлены или вовсе закрыты
						</p>
					</div>
				</InfoBox>
			</div>

			<div>
				<p className="font-onest sc-text-5 font-medium">Причины:</p>
				<div className="sc-gap-2 flex items-baseline">
					<BluePoint />
					<p className="font-onest sc-text-5 font-medium">
						Завышенные ожидания
					</p>
				</div>
				<div className="sc-gap-2 flex items-baseline">
					<BluePoint />
					<p className="font-onest sc-text-5 font-medium">
						Критика потенциала нейросетей
					</p>
				</div>
				<div className="sc-gap-2 flex items-baseline">
					<BluePoint />
					<p className="font-onest sc-text-5 font-medium">
						Отсутствие результатов
					</p>
				</div>
			</div>
		</div>
	)
}

export default AiWinter
