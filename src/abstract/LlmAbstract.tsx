import Script from "next/script"
import AiMathBegin from "./blocks/AiMath/AiMathBegin"
import LineAlgebra from "./blocks/AiMath/LineAlgebra"
import HistoryBlock from "./blocks/history/HistoryBlock"
import Title from "./components/Title/Title"
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
			</div>
		</>
	)
}

export default LlmAbstract
/* 

ssr = 



*/
