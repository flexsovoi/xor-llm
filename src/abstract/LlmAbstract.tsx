import Script from "next/script"
import Begin from "./blocks/history/Begin"
import Year1957 from "./blocks/history/Year1957"
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
					<Year1957 />
				</div>
			</div>
		</>
	)
}

export default LlmAbstract
/* 

ssr = 



*/
