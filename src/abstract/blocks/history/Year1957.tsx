import DashedBorderBox from "@/abstract/components/DashedBorderBox/DashedBorderBox"
import ImageContainer from "@/abstract/components/ImageContainer/ImageContainer"
import InfoBox from "@/abstract/components/InfoBox/InfoBox"
import SubTitle from "@/abstract/components/SubTitle/SubTitle"

const Year1957 = () => {
	return (
		<div>
			<div className="sc-gap-[24px] flex">
				<DashedBorderBox viewBox="0 0 250 740">
					<div className="sc-p-5 sc-w-[250px] sc-h-[740px]">
						<SubTitle>1957</SubTitle>
						<p className="font-onest sc-text-4 text-[#828282]">
							Люди изобретают первую модель нейрона мозга
						</p>
					</div>
				</DashedBorderBox>
				<div>
					<p className="font-onest sc-text-5 sc-mt-5">
						Фрэнком Розенблаттом был изобретен{" "}
						<span className="font-bold">перцептрон</span> — простейшая нейронная
						сеть и первая математическая модель нейрона мозга.
						Вот как перцептрон выглядел:
					</p>
					<div className="relative">
						<div className="sc-w-[480px] sc-h-[215px] sc-top-[50px] -sc-left-[50px] absolute">
							<ImageContainer src="/images/image-2.png" />
							<div className="sc-right-[460px] sc-top-[45px] sc-w-[230px] absolute">
								<InfoBox arrowOffset="55px">
									<p className="font-onest sc-text-5 sc-p-[16px] text-[#707070]">
										На вход поступают несколько значений (числа)
									</p>
								</InfoBox>
							</div>
							<div className="sc-left-[455px] sc-top-[40px] absolute">
								<InfoBox arrowOffset="55px" arrowPosition="left">
									<p className="font-onest sc-text-5 sc-p-[16px] sc-w-[290px] text-[#707070]">
										Чтобы добавить нелинейности, сумма проходит через простую{" "}
										<span className="font-bold text-black">
											активационную функцию:
										</span>{" "}
										если она больше некоторого значения, на выходе сети будет 1,
										иначе 0.
									</p>
								</InfoBox>
							</div>
							<div className="sc-top-[185px] sc-left-[90px] sc-w-[310px] absolute">
								<InfoBox arrowOffset="150px" arrowPosition="top">
									<p className="font-onest sc-text-5 sc-p-[16px] text-[#707070]">
										Каждое значение умножается на свой вес w
										и все это суммируется
									</p>
								</InfoBox>
							</div>
						</div>
					</div>
					<div className="sc-gap-[10px] sc-p-4 sc-mt-[415px] sc-right-[50px] sc-w-[560px] relative flex flex-col rounded-[8px] border bg-[#5DFBFB]">
						<p className="font-onest sc-text-5 font-medium">
							После изобретения перцептрон подвергся большой критике. Многие
							считали, что такой подход не будет работать.
						</p>
						<p className="font-onest sc-text-5 font-medium">
							В итоге перцептрон лежит в основе всех нейросетей даже сегодня.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Year1957
