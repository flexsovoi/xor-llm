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
					className="sc-p-4 font-onest sc-text-4 sc-gap-8 m-auto flex max-w-[1024px] flex-col overflow-hidden"
					id="abstract"
				>
					<HistoryBlock />

					<AiMathBegin />

					<LineAlgebra />

					<MathAnalytic />

					<MechanismAttention />

					<Transformers />

					<PreTraining />

					<FineTuning />

					<Learning />
				</div>
			</div>
		</>
	)
}

export default LlmAbstract
