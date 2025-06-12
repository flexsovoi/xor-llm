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
import TableOfContents from "./components/Contents/Contents"
import Title from "./components/Text/Title"
import { scaleFunction } from "./lib/scale-function"

const LlmAbstract = () => {
	return (
		<>
			<Script id="scale-script" strategy="afterInteractive">
				{scaleFunction}
			</Script>
			<div className="relative lg:flex">
				<TableOfContents />
				<div
					className="sc-p-4 font-onest sc-text-4 m-auto max-w-[1024px] overflow-hidden"
					id="abstract"
				>
					<Title id="history-llm">История LLM</Title>
					<HistoryBlock />

					<Title id="math-nn">Математика нейросетей</Title>
					<AiMathBegin />

					<Title id="linear-algebra">Линейная алгебра</Title>
					<LineAlgebra />

					<Title id="calculus">Математический анализ</Title>
					<MathAnalytic />

					<Title id="attention">Механизм внимания</Title>
					<MechanismAttention />

					<Title id="transformers">Трансформеры</Title>
					<Transformers />

					<Title id="pretraining">Предобучение</Title>
					<PreTraining />

					<Title id="finetuning">Файн-тюнинг</Title>
					<FineTuning />

					<Title id="rl-reasoning">Обучение с подкреплением и ризонинг</Title>
					<Learning />
				</div>
			</div>
		</>
	)
}

export default LlmAbstract
