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
		</div>
	)
}

export default LineAlgebra
