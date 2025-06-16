import DashedBorderBox from "@/abstract/components/DashedBorderBox/DashedBorderBox"
import SubTitle from "@/abstract/components/SubTitle/SubTitle"

const Year1982 = () => {
	return (
		<div className="sc-gap-[24px] flex">
			<DashedBorderBox
				viewBox="0 0 248 238"
				className="sc-p-5 sc-w-[248px] sc-h-[238px]"
			>
				<div className="sc-p-5 sc-w-[250px] sc-h-[710px]">
					<SubTitle>1982</SubTitle>
					<p className="font-onest sc-text-4 text-[#525252]">
						Первая нейросеть, способная читать текст
					</p>
				</div>
			</DashedBorderBox>
			<div className="sc-gap-4 sc-mt-4 flex flex-col">
				<p className="font-onest sc-text-5 text-[#525252]">
					В это время были изобретены первые{" "}
					<span className="font-bold text-black">
						рекуррентные нейронные сети (RNN).
					</span>{" "}
					Их создатель, Джон Хопфилд, недавно получил за это открытие
					нобелевскую премию.
				</p>
				<p className="font-onest sc-text-5 text-[#525252]">
					В оригинале RNN состояли из нейронов, каждый из которых был соединён
					со всеми остальными. Хопфилд доказал, что такая конструкция имеет
					точки-аттракторы, которые позволяют сети
					<span className="font-bold text-black">
						«запоминать» исходные паттерны данных.
					</span>
				</p>
			</div>
		</div>
	)
}

export default Year1982
