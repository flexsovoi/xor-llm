import Script from "next/script"
import AiMathBegin from "./blocks/AiMath/AiMathBegin"
import LineAlgebra from "./blocks/AiMath/LineAlgebra"
import MathAnalytic from "./blocks/AiMath/MathAnalytic"
import FineTuning from "./blocks/FineTuning"
import HistoryBlock from "./blocks/history/HistoryBlock"
import Learning from "./blocks/Learning"
import MechanismAttention from "./blocks/MechanismAttention/MechanismAttention"
import PreTraining from "./blocks/pre-training/PreTraining"
import Transformers from "./blocks/transformers/Transformers"
import Title from "./components/Text/Title"
import { scaleFunction } from "./lib/scale-function"

const LlmAbstract = () => {
	// const block = document.getElementById("abstract")
	// // block?.style.setProperty("--scale-factor", "1")

	return (
		<>
			<Script id="scale-script" strategy="afterInteractive">
				{scaleFunction}
			</Script>
			<div
				className="sc-p-4 font-onest sc-text-4 m-auto mt-10 max-w-[1024px] overflow-hidden"
				id="abstract"
			>
				<Title>История LLM</Title>
				<HistoryBlock />
				<Title>Математика нейросетей</Title>
				<AiMathBegin />
				<Title>Линейная алгебра</Title>
				<LineAlgebra />
				<Title>Математический анализ</Title>
				<MathAnalytic />
				<Title>Механизм внимания</Title>
				<MechanismAttention />
				<Title>Трансформеры</Title>
				<Transformers />
				<Title>Предобучение</Title>
				<PreTraining />
				<Title>Файн-тюнинг</Title>
				<FineTuning />
				<Title>Обучение с подкреплением и ризонинг</Title>
				<Learning />
			</div>
		</>
	)
}

export default LlmAbstract
/* 

ssr = 



*/
