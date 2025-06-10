import ImageContainer from "@/abstract/components/ImageContainer/ImageContainer"
import InfoBox from "@/abstract/components/InfoBox/InfoBox"
import SubTitle from "@/abstract/components/SubTitle/SubTitle"

const LineAlgebra = () => {
	return (
		<div className="sc-mt-8 sc-gap-6 sc-text-5 flex flex-col">
			<div className="font-onest sc-text-5 sc-gap-4 flex flex-col text-[#464646]">
				<p>
					Большая часть нашей повседневной математики состоит из манипулирования
					числами по одному за раз. Формально такие одиночные значения
					мы называем скалярами
				</p>
				<p>
					Но когда чисел становится много (а в нейросетях их огромное
					количество), гораздо удобнее объединять их в структуры. Самые простые
					такие структуры — это 
					<span className="font-bold text-black">векторы.</span>
				</p>
			</div>
			<div className="sc-gap-8 flex items-center">
				<div>
					<ImageContainer
						src="/images/image-12.png"
						className="sc-w-[204px] sc-h-[257px] relative"
					/>
				</div>
				<div>
					<InfoBox arrowOffset="79px" arrowPosition="left">
						<div className="sc-gap-3 font-onest sc-text-5 sc-p-4 flex flex-col">
							<p>
								<span className="font-bold text-black">Векторы</span> выглядят
								вот так.{" "}
							</p>
							<p>
								Это буквально столбец скаляров (они называются элементами
								вектора), записанных в определённом порядке.{" "}
							</p>
							<p>Также у вектора есть длина.</p>
						</div>
					</InfoBox>
				</div>
			</div>
			<div className="sc-gap-8 flex items-center">
				<div>
					<ImageContainer
						src="/images/image-13.png"
						className="sc-w-[454px] sc-h-[201px] relative"
					/>
				</div>
				<div>
					<InfoBox arrowOffset="97px" arrowPosition="left">
						<div className="sc-gap-3 font-onest sc-text-5 sc-p-4 flex flex-col">
							<p>
								Если таких векторов становится несколько, их удобно объединить
								в таблицы — так получаются {" "}
								<span className="font-bold text-black">матрицы</span>.
							</p>
							<p>
								Каждая строка и столбец матрицы — это вектор. Каждый элемент
								матрицы — скаляр.
							</p>
						</div>
					</InfoBox>
				</div>
			</div>
			<div className="sc-gap-4 flex">
				<div className="w-1/2">
					<InfoBox arrowPosition="top" arrowOffset="135px">
						<div className="sc-gap-3 font-onest sc-text-5 sc-p-4 flex flex-col">
							<p>У матриц уже нет длины — у них есть размер. </p>
							<p>
								Например, у матрицы выше размер M×N. Это значит, что в матрице M
								строк и N столбцов.
							</p>
						</div>
					</InfoBox>
				</div>
				<div className="sc-gap-2 flex flex-col">
					<InfoBox arrowOffset="20px" arrowPosition="top">
						<p className="font-onest sc-text-5 sc-p-4">
							В отличие от векторов, здесь у элементов уже два индекса: вначале
							номер строки, затем номер столбца.
						</p>
					</InfoBox>
					<div className="bg-myblue sc-p-4 font-onest rounded-xl border font-semibold">
						<p>
							На самом деле векторы — это частный случай матриц. А матрицы —
							частный случай тензоров.
						</p>
						<p className="sc-gap-2 font-onest flex items-baseline font-medium">
							<span className="sc-w-3 sc-h-3 sc-border-4 rounded-full"></span>
							Вектор – матрица размреа 1×n или n×1 или тензор 1D
						</p>
						<p className="sc-gap-2 font-onest flex items-baseline font-medium">
							<span className="sc-w-3 sc-h-3 sc-border-4 rounded-full"></span>
							Матрица – это тензор 2D.
						</p>
					</div>
				</div>
			</div>
			<div>
				<ImageContainer
					fit="cover"
					src={"/images/image-14.png"}
					className="sc-w-[952px] sc-h-[226px] relative"
				/>
			</div>
			<div></div>
			<p>
				Когда матриц много и они складываются в многомерные массивы, мы уже
				говорим про <strong>тензоры.</strong>
			</p>
			<p>
				<strong>
					Тензор – обобщение понятия матрицы на произвольное число измерений (3
					и более).
				</strong>{" "}
				Например, тензор третьего порядка (3D) – это вектор из матриц.
				Четвертого порядка (4D) – матрица из матриц. Пятого – вектор из тензоров
				4D.{" "}
			</p>
			<p>
				Это самый универсальный “формат”, поэтому именно тензоры чаще всего
				упоминаются в контексте машинного обучения (чаще всего используются
				тензоры 1D, 2D, 3D и 4D).
			</p>
			<div className="sc-gap-2 flex">
				<div className="sc-p-4 sc-w-[381px] rounded-xl border">
					<p className="w-full">
						Вот пример тензора 4D. Это матрица матриц, поэтому у каждого
						элемента 4 индекса.
					</p>
				</div>
				<div className="sc-w-[563px]">
					<p className="sc-p-4 bg-myblue sc-text-4 rounded-xl border font-bold">
						На практике такой 4D тензор может возникнуть, если мы, например,
						обучаем нейросеть, которая должна распознавать изображения.
						Тогда каждая строка — это изображение. Каждая матрица —
						это отдельный канал изображения (в случае RGB их будет три), каждый
						скаляр — значение яркости.
					</p>
				</div>
			</div>
			<div>
				<ImageContainer
					fit="cover"
					src="/images/image-15.png"
					className="sc-w-[940px] sc-h-[418px] relative"
				/>
			</div>
			<div className="sc-gap-8 flex">
				<div className="sc-gap-5 flex w-1/2 flex-col">
					<p>
						Когда тензор поступает в нейросеть, над ним начинают производиться
						разные операции (по сути,{" "}
						<strong>
							вся нейросеть – это определенная последовательность операций над
							тензорами
						</strong>
						). Самая частая такая операция — это умножение.
					</p>
					<p>
						Однако умножение тензоров несколько отличается от того, к чему мы
						привыкли.{" "}
					</p>
					<p>
						На примере векторов: перемножить два вектора – это значит
						перемножить элементы с одинаковыми индексами и сложить. Это
						называется <strong>скалярное умножение</strong>, потому что в итоге
						получается скаляр.
					</p>
				</div>
				<div className="sc-gap-5 flex w-1/2 flex-col">
					<p className="font-medium">
						Скалярно перемножить два вектора – это не
					</p>
					<ImageContainer
						fit="cover"
						src="/images/image-16.png"
						className="sc-w-[300px] sc-h-[159px] relative"
					/>
					<p className="font-medium">это – </p>
					<div className="flex flex-col items-center">
						<ImageContainer
							fit="cover"
							src="/images/image-17.png"
							className="sc-w-[488px] sc-h-[149px] relative"
						/>
						<p className="sc-p-4 sc-w-[400px] bg-myblue sc-text-4 sc-bottom-[20px] relative rounded-xl border font-semibold">
							Обратите внимание, что перемножать можно только векторы одной
							и той же размерности
						</p>
					</div>
				</div>
			</div>
			<SubTitle>Зачем это делать именно так?</SubTitle>
			<div className="flex">
				<div className="sc-gap-[18px] flex flex-col">
					<p>
						Вспомним историю LLM и то, как выглядит <strong>перцептрон</strong>
					</p>
					<p>
						Посмотрим на него внимательнее. У нас есть вектор входных значений{" "}
						<strong>X</strong>
						и вектор весов <strong>W</strong>. Каждое значение умножается
						на свой вес, а затем все складывается. Это ведь и есть скалярное
						произведение!
					</p>
					<div className="sc-w-[268px] sc-h-[72px] self-end">
						<InfoBox arrowPosition="right" arrowOffset="31px">
							<p className="sc-p-4 sc-text-4 bg-myblue rounded-md border font-semibold">
								На вход поступают несколько значений (числа)
							</p>
						</InfoBox>
					</div>
				</div>
				<div className="sc-top-[115px] relative">
					<svg
						className="sc-w-[76px] sc-h-[199px]"
						width={76}
						height={199}
						viewBox="0 0 76 199"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 198H17.0972C23.7246 198 29.0971 192.627 29.0971 186V13C29.0971 6.37258 34.4697 1 41.0971 1H76"
							stroke="black"
							strokeWidth={2}
						/>
					</svg>
				</div>
				<div className="sc-gap-5 flex flex-col items-center">
					<ImageContainer
						fit="cover"
						src={"/images/image-2.png"}
						className="sc-w-[524px] sc-h-[242px] relative"
					/>
					<div className="sc-w-[274px] sc-h-[100px]">
						<InfoBox arrowPosition="top" arrowOffset="132px">
							<p className="sc-p-4 sc-text-4 font-semibold">
								Каждое значение умножается на свой вес W и все это суммируется
							</p>
						</InfoBox>
					</div>
				</div>
			</div>
			<div className="sc-gap-3 flex flex-col">
				<p>
					Конечно, это упрощенный пример. В LLM все немного сложнее, чем на
					картинке сверху. И тем не менее, общий принцип остается схожим: просто
					слоев, значений и весов намного больше, поэтому{" "}
					<strong>перемножать приходится не векторы, а матрицы.</strong>
				</p>
				<p className="sc-p-4 sc-text-4 bg-myblue rounded-md border font-semibold">
					Перемножить две матрицы – это скалярно перемножить каждую строку
					первой на каждый столбец второй
				</p>
			</div>
			<div className="sc-text-4 sc-gap-3 sc-mt-7 flex flex-col items-center font-semibold">
				<p className="sc-p-4 sc-text-4 bg-myblue w-8/10 rounded-md border">
					Помните, что перемножать можно только векторы одной и той же длины,
					так что количество столбцов первой матрицы должно быть равно
					количеству строк второй.
				</p>
				<div className="sc-bottom-5 relative flex flex-col">
					<div className="sc-mb-3 sc-w-[442px] self-end">
						<InfoBox arrowPosition="bottom" arrowOffset="14px">
							<p className="sc-p-4">
								Это элемент матрицы с индексом 1,1, так что его мы получим,
								когда скалярно перемножим первую строку матрицы A на первый
								столбец матрицы B
							</p>
						</InfoBox>
					</div>
					<ImageContainer
						fit="cover"
						src={"/images/image-18.png"}
						className="sc-w-[940px] sc-h-[210px] relative"
					/>
					<div className="sc-bottom-2 sc-w-[442px] relative self-end">
						<InfoBox arrowPosition="top" arrowOffset="282px">
							<p className="sc-p-4">
								Это элемент с индексом 3,2, так что его мы получим, когда
								скалярно перемножим третью строку матрицы A на второй столбец
								матрицы B
							</p>
						</InfoBox>
					</div>
				</div>
				<p className="sc-p-4 sc-w-[554px] sc-text-4 bg-myblue rounded-md border font-semibold">
					Если матрица A имеет размер m×k, а матрица B имеет размер k×n, то
					итоговая матрица будет иметь размер m×n.
				</p>
			</div>
			<div className="sc-gap-3 flex flex-col">
				<p className="text-[#464646]">
					Умножение тензоров размерностей 3D, 4D и так далее происходит по той
					же логике.
				</p>
				<div className="sc-text-4 sc-gap-2 sc-p-4 flex flex-col rounded-lg border">
					<p className="font-semibold">Например:</p>
					<p className="sc-gap-2 font-onest flex items-baseline font-medium">
						<span className="sc-w-3 sc-h-3 sc-border-4 rounded-full"></span>
						Нужно перемножить тензор размерности 2×3×4 на матрицу размерности
						4×2
					</p>
					<p className="sc-gap-2 font-onest flex items-baseline font-medium">
						<span className="sc-w-3 sc-h-3 sc-border-4 rounded-full"></span>
						Для этого надо перемножить каждую “подматрицу” тензора T на матрицу
						W.
					</p>
					<p className="sc-gap-2 font-onest flex items-baseline font-medium">
						<span className="sc-w-3 sc-h-3 sc-border-4 rounded-full"></span>
						Получится две матрицы размерности 3 × 2, то есть итоговый тензор
						будет иметь размерность 2 × 3 × 2.
					</p>
				</div>
			</div>
			<div className="sc-gap-6 flex items-center">
				<div className="w-1/2">
					<ImageContainer
						fit="contain"
						src={"/images/image-19.png"}
						className="sc-h-[250px] sc-p-4 relative"
					/>
				</div>
				<div className="w-1/2">
					<InfoBox arrowOffset="80px" arrowPosition="left">
						<div className="sc-gap-2 sc-p-4 sx-text-5 flex flex-col text-[#464646]">
							<p>
								На практике это могут быть 2 предложения, которые поступают
								в сеть.
							</p>
							<p>
								В каждом предложении 3 слова, каждое слово представлено вектором
								из 4 чисел.
							</p>
						</div>
					</InfoBox>
				</div>
			</div>
			<div className="sc-gap-6 flex items-center justify-end">
				<div className="w-1/2">
					<InfoBox arrowOffset="60px" arrowPosition="right">
						<div className="sc-p-4 sx-text-5 flex flex-col text-[#464646]">
							<p>
								А это могут быть наши веса, на которые необходимо перемножить
								входные значения (наши два предложения).
							</p>
						</div>
					</InfoBox>
				</div>
				<div className="w-1/2">
					<ImageContainer
						fit="contain"
						src={"/images/image-20.png"}
						className="sc-h-[258px] sc-p-4 relative"
					/>
				</div>
			</div>
			<div className="sc-gap-4 sc-p-4 sc-text-4 bg-myblue m-auto flex w-8/10 flex-col rounded-lg border font-semibold">
				<p>
					Именно умножение тензоров лежит в основе каждого слоя в больших
					языковых моделях.
				</p>
				<p>
					Когда вы слышите, что какая‑то модель имеет 400 миллиардов
					параметров — это значит, что внутри неё огромное количество матриц,
					которые непрерывно перемножаются друг на друга, чтобы в итоге
					генерировать текст.
				</p>{" "}
				<p>
					И кстати, GPU нам тоже нужно именно для того, чтобы оптимизировать
					матричные вычисления.
				</p>
			</div>
		</div>
	)
}

export default LineAlgebra
