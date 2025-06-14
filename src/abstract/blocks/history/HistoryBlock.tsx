import Title from "@/abstract/components/Text/Title"
import VerticalDashedLine from "@/abstract/components/VerticalDashedLine/VerticalDashedLine"
import AiWinter from "./AiWinter"
import Begin from "./Begin"
import Year1957 from "./Year1957"
import Year1982 from "./Year1982"
import Year1986 from "./Year1986"
import Year1997 from "./Year1997"
import Year2012 from "./Year2012"
import Year2017 from "./Year2017"
import Year2020 from "./Year2020"
import Year2022 from "./Year2022"
import Year2024 from "./Year2024"
import Year2025 from "./Year2025"

const HistoryBlock = () => {
	return (
		<div>
			<Title id="history-llm">История LLM</Title>
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
			<VerticalDashedLine
				className="sc-h-[36px] sc-ml-[42px] sc-my-2"
				height={36}
			/>
			<Year2012 />
			<VerticalDashedLine
				className="sc-h-[36px] sc-ml-[42px] sc-my-2"
				height={36}
			/>
			<Year2017 />
			<VerticalDashedLine
				className="sc-h-[36px] sc-ml-[42px] sc-my-2"
				height={36}
			/>
			<Year2020 />
			<VerticalDashedLine
				className="sc-h-[36px] sc-ml-[42px] sc-my-2"
				height={36}
			/>
			<Year2022 />
			<VerticalDashedLine
				className="sc-h-[36px] sc-ml-[42px] sc-my-2"
				height={36}
			/>
			<Year2024 />
			<VerticalDashedLine
				className="sc-h-[36px] sc-ml-[42px] sc-my-2"
				height={36}
			/>
			<Year2025 />
		</div>
	)
}

export default HistoryBlock
