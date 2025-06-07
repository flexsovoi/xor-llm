import Script from "next/script"
import AiWinter from "./blocks/history/AiWinter"
import Begin from "./blocks/history/Begin"
import Year1957 from "./blocks/history/Year1957"
import Year1982 from "./blocks/history/Year1982"
import Year1986 from "./blocks/history/Year1986"
import Year1997 from "./blocks/history/Year1997"
import VerticalDashedLine from "./components/VerticalDashedLine/VerticalDashedLine"
import { scaleFunction } from "./lib/scale-function"

const LlmAbstract = () => {
	// const block = document.getElementById("abstract")
	// // block?.style.setProperty("--scale-factor", "1")

	return (
		<>
			<Script id="scale-script" strategy="afterInteractive">
				{scaleFunction}
			</Script>
			<div className="m-auto mt-10 h-screen max-w-[1024px]" id="abstract">
				<div className="sc-p-4">
					<Begin />
					<VerticalDashedLine
						className="sc-h-[36px] sc-ml-[42px] sc-my-2"
						height={36}
					/>
					<Year1957 />
					<AiWinter />
					<Year1982 />
					<VerticalDashedLine
						className="sc-h-[36px] sc-ml-[42px] sc-my-2"
						height={36}
					/>
					<Year1986 />
					<VerticalDashedLine
						className="sc-h-[36px] sc-ml-[42px] sc-my-2"
						height={36}
					/>
					<Year1997 />
				</div>
			</div>
		</>
	)
}

export default LlmAbstract
/* 

ssr = 



*/
