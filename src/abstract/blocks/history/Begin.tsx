import ImageContainer from "@/abstract/components/ImageContainer/ImageContainer"
import SubTitle from "@/abstract/components/SubTitle/SubTitle"

const Begin = () => {
	return (
		<div>
			<svg
				className="sc-w-0.5 sc-h-[33px] sc-ml-[50px] sc-mb-1"
				viewBox="0 0 2 33"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 1L1 32"
					stroke="#C8C8C8"
					strokeWidth="2"
					strokeLinecap="round"
					strokeDasharray="7 7"
				/>
			</svg>

			<div className="flex justify-between">
				{/* <div className="h-478d p-20d rounded-8d relative border border-dashed border-[#C8C8C8]">			 */}
				<div className="sc-h-[478px] relative">
					<svg
						viewBox="0 0 250 480"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute h-full"
					>
						<rect
							x={1}
							y={1}
							width={248}
							height={478}
							rx={20}
							stroke="#C8C8C8"
							strokeWidth={2}
							strokeLinecap="round"
							strokeDasharray="12 12"
						/>
					</svg>
					<div className="sc-p-5 relative">
						<SubTitle>Начало</SubTitle>
						<ImageContainer
							src="/images/image-1.png"
							className="sc-w-[305px] sc-h-[305px] sc-mt-[82px] absolute -rotate-1"
						/>
					</div>
				</div>
				<div className="sc-w-[700px] flex flex-col">
					<p className="sc-text-5 font-onest">
						<span className="font-semibold">Всего 100 лет назад </span>
						люди только-только привыкали к телефонам, и представить себе не
						могли, что однажды миллиарды людей по всему миру объединятся в
						гигантскую информационную сеть, в которой каждую секунду будут
						генерироваться миллионы сообщений, фотографий и видео
					</p>
					<p className="sc-w-[595px] sc-text-5 font-onest sc-mt-9 self-end">
						Никто и подумать не мог, что 
						<span className="font-semibold">
							всего за несколько десятилетий мы накопим больше информации,
							чем за всю историю человечества до этого
						</span>
						, и что все эти данные послужат топливом для самых мощных и умных
						систем, которые когда‑либо создавал человек.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Begin
