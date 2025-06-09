import ImageContainer from "@/abstract/components/ImageContainer/ImageContainer"

const AiMathBegin = () => {
	return (
		<div className="sc-gap-6 font-onest sc-text-5 flex flex-col">
			<div className="sc-gap-6 flex">
				<div>
					<ImageContainer
						src={"/images/image-11.png"}
						className="sc-w-[204px] sc-h-[254px] relative"
					/>
				</div>
				<div className="sc-gap-4 font-onest flex flex-col">
					<p className="sc-text-5">
						Когда мы говорим про{" "}
						<span className="font-bold text-black">нейросети</span>, многие
						представляют себе сложные модели, мощные компьютеры и что‑то почти
						магическое. Но на самом деле{" "}
						<span className="font-bold text-black">
							за всеми этими впечатляющими технологиями стоит одна простая
							вещь — математика.
						</span>
					</p>
					<p className="sc-text-5">
						Всё глубокое обучение — это просто набор
						<span className="font-bold text-black">
							математических инструментов: матрицы, градиенты, вероятности
							и функции потерь.
						</span>
						И чтобы разобраться в том, как работают современные языковые модели,
						нужно хотя бы примерно понимать, как эти инструменты устроены
						и зачем они нужны.
					</p>
				</div>
			</div>
			<p>
				В этой главе — как раз об этом. Мы не будем усложнять и погружаться
				в громоздкие формулы. Вместо этого мы на пальцах, простых примерах
				и понятных схемах объясним, как именно работает та математика, которая
				нужна, чтобы нейросети могли учиться и решать самые разные задачи.
			</p>
			<p>Спойлер: все гораздо проще, чем кажется.</p>
			<div className="sc-gap-3 flex flex-col items-center">
				<p className="font-onest sc-w-[454px] text-center font-medium">
					Вся математика, необходимая для понимания глубокого обучения делится
					на:
				</p>
				<svg
					className="sc-w-[521px] sc-h-[52px]"
					viewBox="0 0 521 52"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16.9141 44.5789C13.0958 44.5789 9.91406 47.8525 9.91406 52L7.91406 52C7.91406 47.8525 4.73234 44.5789 0.914062 44.5789L0.914062 42.5789C3.75971 42.5789 6.27205 43.951 7.91406 46.0788L7.91406 32L9.91406 32L9.91406 46.0788C11.5561 43.951 14.0684 42.5789 16.9141 42.5789L16.9141 44.5789Z"
						fill="#151515"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M520.914 44.5789C517.096 44.5789 513.914 47.8525 513.914 52L511.914 52C511.914 47.8525 508.732 44.5789 504.914 44.5789L504.914 42.5789C507.76 42.5789 510.272 43.951 511.914 46.0788L511.914 32L513.914 32L513.914 46.0788C515.556 43.951 518.068 42.5789 520.914 42.5789L520.914 44.5789Z"
						fill="#151515"
					/>
					<path
						d="M8.91406 32V18.5C8.91406 15.1863 11.6004 12.5 14.9141 12.5H259.914C263.228 12.5 265.914 9.81371 265.914 6.5V0"
						stroke="#151515"
						strokeWidth={2}
					/>
					<path
						d="M512.914 32V18.5C512.914 15.1863 510.228 12.5 506.914 12.5H271.914C268.6 12.5 265.914 9.81371 265.914 6.5V0"
						stroke="#151515"
						strokeWidth={2}
					/>
				</svg>
				<div className="sc-gap-[168px] sc-text-4 flex justify-between">
					<div className="sc-gap-5 flex flex-col items-center">
						<p className="sc-py-3 sc-p-6 w-fit rounded-[48px] bg-black text-white">
							Линейная алгебра
						</p>
						<p className="font-semibold">
							Основа всех вычислений. Здесь мы изучим:
						</p>
						<div className="sc-gap-1 flex flex-col">
							<p className="sc-p-3 border">Векторы, матрицы и тензоры</p>
							<p className="sc-p-3 border">Скалярное произведение</p>
							<p className="sc-p-3 border">
								Умножение матриц и тензоров в нейросетях
							</p>
						</div>
					</div>
					<div className="sc-gap-5 flex flex-col items-center">
						<p className="sc-py-3 sc-p-6 w-fit rounded-[48px] bg-black text-center text-white">
							Мат. анализ
						</p>
						<div className="text-center font-semibold">
							<p>Раздел про то, как нейросети учатся.</p>
							<p> В нашей программе:</p>
						</div>

						<div className="sc-gap-1 flex w-full flex-col">
							<p className="sc-p-3 border">Loss-функции</p>
							<p className="sc-p-3 border">Градиентный спуск</p>
							<p className="sc-p-3 border">Обратное распространение ошибки</p>
						</div>
					</div>
				</div>
			</div>{" "}
		</div>
	)
}

export default AiMathBegin
