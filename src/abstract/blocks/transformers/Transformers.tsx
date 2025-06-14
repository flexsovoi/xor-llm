import BlackPoint from "@/abstract/components/BlackPoint"
import ImageContainer from "@/abstract/components/ImageContainer/ImageContainer"
import InfoBox from "@/abstract/components/InfoBox/InfoBox"
import Title from "@/abstract/components/Text/Title"

const Transformers = () => {
	return (
		<div className="sc-text-5 sc-gap-6 sc-mt-5 flex flex-col text-[#464646]">
			<Title id="transformers">Трансформеры</Title>

			<div className="sc-gap-6 flex">
				<div>
					<ImageContainer
						fit="cover"
						src={"/images/image-42.png"}
						className="sc-w-[402px] sc-h-[372px] relative"
					/>
				</div>
				<div className="sc-gap-4 flex flex-col">
					<p>
						В 2017 году вышла знаменитая статья «Attention is all you need»,
						которая полностью перевернула мир глубокого обучения и NLP. Авторы
						показали, что механизм внимания не просто дополняет рекуррентные
						сети (RNN) — он может полностью заменить их, став самостоятельной
						и гораздо более мощной архитектурой. Так появились 
						<strong>трансформеры.</strong>
					</p>
					<p>
						Трансформеры изменили подход ко всем задачам обработки текста
						и открыли путь к созданию современных больших языковых моделей.
						<strong>
							Большинство известных вам нейросетей сегодня построены именно
							на основе трансформеров.
						</strong>
					</p>
				</div>
			</div>
			<p>
				В этой главе мы подробно, шаг за шагом разберём архитектуру Transformer
				от начала и до конца.
			</p>
			<div>
				<ImageContainer
					fit="cover"
					src={"/images/image-43.png"}
					className="sc-w-[952px] sc-h-[464px] relative"
				/>
			</div>
			<p>
				Принцип работы простейшей архитектуры энкодера-декодера такой (это еще
				не трансформер):
			</p>
			<div>
				<ImageContainer
					fit="cover"
					src={"/images/image-44.png"}
					className="sc-w-[952px] sc-h-[464px] relative"
				/>
			</div>
			<div>
				<ol className="flex w-9/10 list-decimal flex-col font-medium">
					<div className="sc-px-8 sc-py-3">
						<li>
							Это наша входная последовательность, которую обрабатывает энкодер
						</li>
					</div>
					<div className="sc-px-8 sc-py-3">
						<li>
							Здесь <strong>последовательно</strong> формируются скрытые
							состояния
						</li>
					</div>
					<div className="sc-pl-8 sc-pr-3 sc-py-3">
						<li>
							{`Декодер начинает генерацию с токена <bos> (beginning of sequence) — начала последовательности. Далее все уже сгенерированные токены по очереди добавляются в контекст.`}
						</li>
					</div>
					<div className="sc-pl-8 sc-pr-3 sc-py-3">
						<li>
							Чтобы сгенерировать следующий токен, декодер вычисляет 
							<strong>attention score</strong> между 
							<strong>текущим состоянием декодера</strong> (правый красный
							вектор) и 
							<strong>всеми состояниями энкодера</strong> (зелёные векторы).
						</li>
					</div>
					<div className="sc-pl-8 sc-pr-3 sc-py-3">
						<li>Внимание считается также, как мы разбирали в прошлой главе</li>
					</div>
					<div className="sc-pl-8 sc-pr-3 sc-py-3">
						<li>
							Полученные веса внимания суммируются, и итоговое представление
							отправляется в декодер для генерации токена
						</li>
					</div>
				</ol>
			</div>
			<p>
				То, что мы разобрали выше —{" "}
				<strong>это модель энкодера-декодера, построенная на RNN,</strong>{" "}
				то есть рекуррентная сеть, в которой токены все ещё обрабатываются
				последовательно.
			</p>
			<p>
				Обратите внимание, что внимание здесь используется не на всех шагах,
				а только для связи декодера с энкодером.
			</p>
			<p>
				Отличие трансформера от этой картинки в том, что 
				<strong>в нем нет вообще никакой рекурретности:</strong> все токены
				обрабатываются параллельно благодаря тому, что внимание полностью
				заменяет последовательную обработку в энкодере и декодере.
			</p>
			<p className="sc-p-4 sc-text-4 bg-myblue rounded-lg border font-semibold text-[#151515]">
				Статья “Attention is All You Need” называется так именно потому, что
				авторы доказали, что одного лишь механизма внимания достаточно, чтобы
				полностью заменить рекуррентность в нейронных сетях и обрабатывать всю
				последовательность параллельно и эффективно.
			</p>
			<div className="sc-mt-10 sc-gap-3 flex flex-col">
				<p>
					Вот наш трансформер во всей красе, слева – энкодер, справа – декодер:
				</p>
				<div className="sc-gap-3 flex">
					<div>
						<ImageContainer
							fit="cover"
							src={"/images/image-45.png"}
							className="sc-w-[514px] sc-h-[706px] relative"
						/>
					</div>
					<div>
						<ol className="flex w-9/10 list-decimal flex-col font-medium">
							<div className="sc-pl-8 sc-pr-3 sc-py-3">
								<li>
									После внимания вектор каждого токена отдельно проходит
									через небольшие полносвязные слои. На этом этапе сеть
									как бы обдумывает и обрабатывает информацию о внимании.
								</li>
							</div>
							<div className="sc-pl-8 sc-pr-3 sc-py-3">
								<li>
									Здесь вычисляется Multi-Head Self-Attention. Каждый токен
									смотрит одновременно на все остальные токены во входной
									последовательности, вычисляя внимание. Так сеть понимает
									контекст.
								</li>
							</div>{" "}
							<div className="sc-pl-8 sc-pr-3 sc-py-3">
								<li>
									После снова идут слои Feed Forward для обработки информации.
									Получившееся в итоге векторное представление затем проходит
									через линейный слой и функцию softmax, превращаясь
									в вероятности токенов.
								</li>
							</div>
						</ol>
					</div>
				</div>
			</div>
			<ol className="flex w-9/10 list-decimal flex-col font-medium" start={4}>
				<div className="sc-pl-8 sc-pr-3 sc-py-3">
					<li>
						Это уже знакомое нам Decoder-Encoder внимание. Декодер смотрит
						на выходы энкодера, чтобы понять, на какие входные слова нужно
						обратить внимание при генерации текущего токена.
					</li>
				</div>
				<div className="sc-pl-8 sc-pr-3 sc-py-3">
					<li>
						Декодер смотрит на уже сгенерированные токены (то есть
						на предыдущие), вычисляя внимание. При этом используется маска
						(Masked), чтобы модель не «подсматривала» будущие токены.
					</li>
				</div>
				<div className="sc-pl-8 sc-pr-3 sc-py-3">
					<li>
						shifted right означает, что для каждого токена входной
						последовательности мы предсказываем следующий, не подглядывая вперёд
					</li>
				</div>
			</ol>
			<div className="sc-gap-2 sc-p-3 m-auto flex w-2/3 items-center rounded-lg border">
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9.99984 18.3327C5.39734 18.3327 1.6665 14.6019 1.6665 9.99935C1.6665 5.39685 5.39734 1.66602 9.99984 1.66602C14.6023 1.66602 18.3332 5.39685 18.3332 9.99935C18.3332 14.6019 14.6023 18.3327 9.99984 18.3327ZM9.16651 9.16602V14.166H10.8332V9.16602H9.16651ZM9.16651 5.83268V7.49935H10.8332V5.83268H9.16651Z"
						fill="black"
					/>
				</svg>
				<p className="text-[#151515]">
					Обе части состоят из нескольких (N) одинаковых блоков
				</p>
			</div>
			<div className="sc-gap-3 flex">
				<div className="sc-gap-4 flex flex-col justify-center">
					<strong>Остаточные соединения</strong>
					<p>
						На схеме выше вы можете иногда видеть стрелки, которые соединяют
						вход блока напрямую с его выходом, минуя промежуточные слои. Это так
						называемые Residual Connections (остаточные соединения).
					</p>
					<p>
						Дело в том, что при обучении глубоких сетей информация часто
						начинает теряться или сильно меняться, проходя через много слоёв
						подряд. Остаточные связи решают эту проблему: они позволяют исходной
						информации «перескочить» через слой и попасть сразу на выход блока.
					</p>
				</div>
				<div>
					<ImageContainer
						fit="cover"
						src={"/images/image-46.png"}
						className="sc-w-[259px] sc-h-[357px] relative"
					/>
				</div>
			</div>
			<div className="sc-gap-3 relative flex w-3/4 self-end">
				<div className="sc-w-[213px] -sc-left-[200px] sc-top-[66px] absolute">
					<InfoBox arrowPosition="right" arrowOffset="73px">
						<p className="sc-p-4">
							Меняем масштаб с помощью обучаемых параметров
						</p>
					</InfoBox>
				</div>
				<div>
					<ImageContainer
						src={"/images/image-47.png"}
						className="sc-w-[259px] sc-h-[357px] relative"
					/>
				</div>
				<div className="sc-gap-4 flex flex-col">
					<div>
						<strong>Нормализация</strong>
						<p>
							Разбросанные по схеме желтые кирпичики 
							<strong>«Add & Norm»</strong> обозначают два действия, которые
							модель выполняет после каждого блока слоев:
						</p>
					</div>
					<p>
						Add — это сложение тех самых остаточных связей с выходами текущего
						блока.
					</p>
					<p>
						<strong>Norm (Layer Normalization)</strong>
						 — это операция, которая стабилизирует обучение нейросети. Она
						нормализует значения в каждом слое, чтобы они не становились слишком
						большими или слишком маленькими.
					</p>
				</div>
			</div>
			<div className="sc-gap-5 flex">
				<div className="sc-gap-4 flex flex-col">
					<div>
						<strong>Эмбеддинги и позиционные эмбеддинги</strong>
						<p>
							В самом низу схемы мы видим розовые кирпичи эмбеддингов, к которым
							прибавляется некий <strong>Position Encoding</strong>. Мы уже
							говорили, что эмбеддинги — это это способ представить токен в виде
							вектора чисел так, чтобы модель могла понять его смысл.
						</p>
					</div>
					<p>
						Однако такие векторы несут в себе только семантическую информацию
						и не учитывают позицию слова в предложении, потому что трансформер
						обрабатываем все токены одновременно. Для этого нам и нужно
						позиционное кодирование. Оно 
						<strong>указывает, в каком порядке идут слова</strong>.
					</p>
				</div>
				<div>
					<ImageContainer
						src={"/images/image-48.png"}
						className="sc-w-[437px] sc-h-[384px] relative"
					/>
				</div>
			</div>
			<div className="sc-gap-5 flex">
				<div className="sc-gap-4 flex flex-col">
					<div>
						<strong>Маски в Masked Attention</strong>
						<p>
							Для каждого токена входной последовательности декодер должен
							предсказать следующий. Но, вспомним, что у трансформера нет
							рекуррентности, и все токены обработываются одновременно, так что
							<strong>
								при обучении в Decoder мы подаем всю выходную последовательность
								сразу.
							</strong>
						</p>
					</div>
					<p>
						Чтобы в таком сценарии при вычислении внимания декодер не
						подглядывал вперед, нам и нужны маски. Это{" "}
						<strong>специальные матрицы</strong>, которые закрывают доступ
						модели к будущим токенам, которые она еще не “сгенерировала”.
					</p>
				</div>
				<div>
					<ImageContainer
						src={"/images/image-49.png"}
						className="sc-w-[374px] sc-h-[324px] relative"
					/>
				</div>
			</div>
			<div className="sc-gap-5 flex">
				<div>
					<ImageContainer
						src={"/images/image-50.png"}
						className="sc-w-[381px] sc-h-[342px] relative"
					/>
				</div>
				<div className="flex flex-col justify-between">
					<div>
						<strong>Softmax</strong>
						<p>
							Когда модель вычисляет внимание, она получает числа, которые
							показывают, насколько сильно один токен связан с другими.
							Эти числа могут быть <strong>произвольными</strong>{" "}
							(положительными, отрицательными, большими и маленькими).
						</p>
					</div>
					<p>
						В конце нам нужно превратить эти числа в вероятности токенов.
						Тут на помощь приходит функция softmax. Именно она 
						<strong>
							масштабирует числа так, чтобы все они находились в промежутке
							от 0 до 1 и в сумме давали 1:{" "}
						</strong>
						как настоящие вероятности.
					</p>
				</div>
			</div>
			<div className="sc-p-4 sc-text-4 bg-myblue rounded-lg border font-semibold text-[#151515]">
				<p>
					Именно так выглядел трансформер, который ученые из Google изобрели в
					2017 году. С тех пор архитектура почти не изменилась.
				</p>
				<p>
					Трансформеры действительно очень сложно заменить, потому что они:{" "}
				</p>
				<p className="sc-gap-2 flex items-baseline font-medium">
					<BlackPoint />
					обучаются быстро и параллельно;
				</p>
				<p className="sc-gap-2 flex items-baseline font-medium">
					<BlackPoint />
					могут обрабатывать длинные последовательности;
				</p>
				<p className="sc-gap-2 flex items-baseline font-medium">
					<BlackPoint />
					универсальны и масштабируемы.
				</p>
			</div>
			<p>
				Однако некоторые вариации архитектуры все-таки появились. Вот три из
				них, о которых стоит знать:
			</p>
			<div>
				<strong>MoE (Mixture of Experts)</strong>
				<p>
					Подход, при котором внутри одной большой сети есть несколько маленьких
					специализированных сетей. Каждая такая сеть называется{" "}
					<strong>экспертом</strong>. Каждый эксперт обрабатывает только
					те данные, в которых он (как считает модель) разбирается лучше других.
				</p>
			</div>
			<div className="flex flex-col items-center">
				<div className="sc-gap-[45px] flex">
					<div className="sc-w-[285px] sc-top-8 relative">
						<InfoBox arrowPosition="bottom" arrowOffset="160px">
							<p className="sc-p-4">
								В этой части все остается как есть, обычный трансформер.
								Внимание общее для всех токенов.
							</p>
						</InfoBox>
					</div>
					<div className="sc-w-[285px] sc-top-8 relative">
						<InfoBox arrowPosition="bottom" arrowOffset="160px">
							<p className="sc-p-4">
								В этой части все остается как есть, обычный трансформер.
								Внимание общее для всех токенов.
							</p>
						</InfoBox>
					</div>
					<div className="sc-w-[285px] sc-top-[55px] relative">
						<InfoBox arrowPosition="bottom" arrowOffset="155px">
							<p className="sc-p-4">
								Вместо одной полносвязной сети здесь появляется несколько.
								Каждая – эксперт, который обрабатывает доверенные ему токены.
							</p>
						</InfoBox>
					</div>
				</div>
				<div>
					<ImageContainer
						src={"/images/image-51.png"}
						className="sc-w-[874px] sc-h-[285px] relative"
					/>
				</div>
				<div className="sc-mt-3 self-end">
					<InfoBox arrowPosition="top" arrowOffset="170px">
						<p className="sc-p-4">В итоге суммируем ответы всех экспертов.</p>
					</InfoBox>
				</div>
			</div>
			<div className="sc-gap-5 flex">
				<div className="sc-gap-4 flex flex-col">
					<div>
						<strong>Decoder-only</strong>
						<p>
							В таких архитектурах вся модель — это декодер. Энкодер
							отбрасывается вообще. Такие модели проще и быстрее обучаются,
							поэтому стали популярны.{" "}
							<strong>
								Самый известный пример decoder-only модели — это GPT.
							</strong>
						</p>
					</div>
					<p>
						<strong>
							Вот так выглядит полная архитектура. Как видите, все остаётся
							как было, только мы избавляемся от тяжеловесного энкодера.
						</strong>
						.
					</p>
				</div>
				<div>
					<ImageContainer
						src={"/images/image-52.png"}
						className="sc-w-[532px] sc-h-[306px] relative"
					/>
				</div>
			</div>
			<div className="sc-gap-5 flex">
				<div>
					<ImageContainer
						src={"/images/image-52.png"}
						className="sc-w-[532px] sc-h-[306px] relative"
					/>
				</div>
				<div className="sc-gap-4 flex flex-col">
					<div>
						<strong>Мультимодальный трансформер</strong>
						<p>
							Сама архитектура здесь не меняется. Просто добавляются другие
							модальности (картинки, видео, аудио), которые нужно обрабатывать
							отдельно
						</p>
					</div>
					<p>
						Из-за этого нам приходится множить энкодеры: каждый из энкодеров
						отвечает за свою модальность и переводит разные типы данных
						в эмбеддинги.
					</p>
				</div>
			</div>
			<div>
				<ol className="flex list-decimal flex-wrap font-medium">
					<div className="sc-pl-8 sc-pr-3 sc-py-3 sc-w-[363px]">
						<li>Склеиваем и подаём в LLM</li>
					</div>
					<div className="sc-pl-8 sc-pr-3 sc-py-3 sc-w-[411px]">
						<li>
							Отражаем их в одно пространство (например, чтобы эмбеддинг
							картинки кота был похож на слово «кот»).
						</li>
					</div>{" "}
					<div className="sc-pl-8 sc-pr-3 sc-py-3 sc-w-[363px] sc-bottom-20 relative">
						<li>Энкодим разные виды входных данных в эмбеддинги.</li>
					</div>
				</ol>
			</div>
		</div>
	)
}

export default Transformers
