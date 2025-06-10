import ImageContainer from "@/abstract/components/ImageContainer/ImageContainer"
import InfoBox from "@/abstract/components/InfoBox/InfoBox"

const MechanismAttention = () => {
	return (
		<div className="sc-text-5 sc-gap-6 flex flex-col text-[#464646]">
			<div className="sc-mt-8 sc-gap-6 flex">
				<div>
					<ImageContainer
						fit="cover"
						src={"/images/image-33.jpg"}
						className="sc-w-[448px] sc-h-[336px] relative"
					/>
				</div>
				<div className="sc-gap-6 flex flex-col">
					<p>
						Представьте, что вы читаете длинный текст. Ваш мозг автоматически
						выделяет важные слова и предложения, чтобы уловить основную мысль.
						То же самое научились делать и нейросети — выбирать, на что именно{" "}
						<strong color="#151515">обратить внимание</strong>, чтобы лучше
						понять смысл.
					</p>
					<p>
						Поначалу нейросети читали текст последовательно — слово за словом,
						строка за строкой (так делали рекуррентные RNN, которые мы разбирали
						в главе про историю). Но такая память не позволяла им хорошо
						понимать и писать длинные тексты.
					</p>
				</div>
			</div>
			<p>
				Поэтому то исследователи и придумали механизм внимания (attention),
				который дал сетям способность смотреть на текст целиком, находить между
				словами связи и не упускать ключевые детали.
			</p>
			<p>
				Изобретение внимания стало настоящим прорывом и легло в основу
				архитектуры трансформера, на которой сегодня основаны все языковые
				модели.
			</p>
			<div className="sc-p-4 rounded-lg border text-[#151515]">
				<p className="font-semibold">
					Внимание — это специальный слой нейронной сети. На каждом шаге
					attention решает, какие части входных данных сейчас важнее других.
				</p>
			</div>
			<p>
				Self-attention помогает выучить взаимосвязи между токенами в
				последовательности, моделируя «смысл» других релевантных токенов при
				обработке текущего. Мы как бы &quot;взвешиваем&quot; релевантность всех
				токенов последовательности относительно друг друга (отсюда термин
				само-внимание).
			</p>
			<div className="sc-gap-4 m-auto flex w-2/3 flex-col items-center">
				<svg
					className="sc-w-[16px] sc-h-[20px] sc-ml-[25%]"
					viewBox="0 0 16 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M9.73154e-07 12.5789C3.81828 12.5789 7 15.8525 7 20L9 20C9 15.8525 12.1817 12.5789 16 12.5789L16 10.5789C13.1544 10.5789 10.642 11.951 9 14.0788L9 -9.17939e-07L7 -1.18021e-06L7 14.0788C5.35799 11.951 2.84565 10.5789 1.23542e-06 10.5789L9.73154e-07 12.5789Z"
						fill="#151515"
					/>
				</svg>

				<div className="sc-gap-5 flex">
					<p className="sc-p-3 border font-medium">
						Текущий токен h, для которого ищем связанные кусочки
					</p>
					<p className="sc-p-3 border font-medium">
						Другой токен t входной последовательности
					</p>
				</div>

				<svg
					className="sc-w-[302px] sc-h-[52px] m-auto"
					viewBox="0 0 302 52"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M149 44.5789C152.818 44.5789 156 47.8525 156 52L158 52C158 47.8525 161.182 44.5789 165 44.5789L165 42.5789C162.154 42.5789 159.642 43.951 158 46.0788L158 32L156 32L156 46.0788C154.358 43.951 151.846 42.5789 149 42.5789L149 44.5789Z"
						fill="#151515"
					/>
					<path
						d="M301 0L301 13.5C301 16.8137 298.314 19.5 295 19.5L163 19.5C159.686 19.5 157 22.1863 157 25.5L157 32"
						stroke="#151515"
						stroke-width="2"
					/>
					<path
						d="M0.999997 0L0.999998 13.5C0.999999 16.8137 3.68629 19.5 7 19.5L151 19.5C154.314 19.5 157 22.1863 157 25.5L157 32"
						stroke="#151515"
						stroke-width="2"
					/>
				</svg>
				<p className="sc-p-3 m-auto w-1/2 rounded-[48px] bg-[#151515] text-center text-white">
					Вычисление внимания
				</p>
				<svg
					className="sc-w-[16px] sc-h-[20px]"
					viewBox="0 0 16 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M9.73154e-07 12.5789C3.81828 12.5789 7 15.8525 7 20L9 20C9 15.8525 12.1817 12.5789 16 12.5789L16 10.5789C13.1544 10.5789 10.642 11.951 9 14.0788L9 -9.17939e-07L7 -1.18021e-06L7 14.0788C5.35799 11.951 2.84565 10.5789 1.23542e-06 10.5789L9.73154e-07 12.5789Z"
						fill="#151515"
					/>
				</svg>
				<p className="font-medium text-[#151515]">
					Скор (число): насколько токен t релевантен для токена h
				</p>
			</div>
			<div className="sc-text-4 sc-p-4 rounded-lg border font-semibold text-[#151515]">
				<p>Например:</p>
				<p className="sc-gap-2 flex items-baseline font-medium">
					<span className="sc-w-3 sc-h-3 sc-border-4 rounded-full"></span>
					Предположим, что сети поступает на вход предложение «Маша дала яблоко
					Саше, она была голодна»
				</p>{" "}
				<p className="sc-gap-2 flex items-baseline font-medium">
					<span className="sc-w-3 sc-h-3 sc-border-4 rounded-full"></span>
					А затем мы просим её ответить на вопрос «Кто был голоден?»
				</p>
			</div>
			<div className="sc-text-4 flex justify-between text-[#151515]">
				<div className="sc-px-4 sc-py-2 rounded-[48px] border">Маша</div>
				<div className="sc-px-4 sc-py-2 rounded-[48px] border">дала</div>
				<div className="sc-px-4 sc-py-2 rounded-[48px] border">яблоко</div>
				<div className="sc-px-4 sc-py-2 rounded-[48px] border border-dashed">
					Саше
				</div>
				<div className="sc-px-4 sc-py-2 rounded-[48px] border border-dashed">
					она
				</div>
				<div className="sc-px-4 sc-py-2 rounded-[48px] border">была</div>
				<div className="sc-px-4 sc-py-2 rounded-[48px] border">голодна</div>
				<div className="sc-px-4 sc-py-2 rounded-[48px] border">кто</div>
				<div className="sc-px-4 sc-py-2 rounded-[48px] border">был</div>
				<div className="sc-px-4 sc-py-2 rounded-[48px] border border-dashed">
					голоден?
				</div>
				<div className="sc-px-4 sc-py-2 bg-myblue rounded-[48px] border border-dashed">
					?
				</div>
			</div>
			<div className="flex">
				<div className="sc-w-[325px]">
					<InfoBox arrowPosition="top" arrowOffset="310px">
						<p className="sc-p-4">
							Результат «работы» функции — выходные данные.
						</p>
					</InfoBox>
				</div>
				<svg
					className="sc-w-[2px] sc-h-[132px] sc-ml-[85px] sc-bottom-5 relative"
					viewBox="0 0 2 132"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 1L1.00001 131"
						stroke="black"
						strokeLinecap="round"
						strokeDasharray="8 8"
					/>
				</svg>
				<div className="sc-w-[360px] sc-ml-[170px]">
					<InfoBox arrowPosition="top" arrowOffset="310px">
						<p className="sc-p-4">Сначала она посмотрит на предыдущий токен</p>
					</InfoBox>
				</div>
				<svg
					className="sc-w-[2px] sc-h-[163px] sc-ml-[30px] sc-bottom-5 relative"
					viewBox="0 0 2 163"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 1L1.00001 162"
						stroke="black"
						strokeLinecap="round"
						strokeDasharray="8 8"
					/>
				</svg>
			</div>
			<div className="sc-gap-5 sc-bottom-10 relative flex justify-end">
				<div className="sc-w-[447px] sc-bottom-10 relative">
					<InfoBox arrowPosition="top" arrowOffset="205px">
						<p className="sc-p-4">
							Затем определит, что самый релевантный токен для «голоден» – токен
							«она»
						</p>
					</InfoBox>
				</div>{" "}
				<div className="sc-w-[324px]">
					<InfoBox arrowPosition="top" arrowOffset="300px">
						<p className="sc-p-4">Модель должна предсказать следующий токен</p>
					</InfoBox>
				</div>
			</div>
			<p className="sc-p-4 sc-text-4 bg-myblue rounded-lg border font-semibold text-[#151515]">
				К слову, алгоритм внимания был изобретён несколько раньше трансформеров.
				Его предложил в 2014 году один из отцов глубокого обучения Йошуа
				Бенджио.
			</p>
			<div className="sc-gap-5 flex">
				<div className="sc-gap-2 flex flex-col">
					<div>
						<InfoBox arrowPosition="right" arrowOffset="63px">
							<p className="sc-p-4">
								В процессе обработки последовательности{" "}
								<strong color="#151515">
									алгоритм внимания отрабатывает на каждой паре токенов.
								</strong>{" "}
								Представлять это можно вот так
							</p>
						</InfoBox>
					</div>
					<p className="sc-p-4 sc-text-4 bg-myblue rounded-lg border font-semibold text-[#151515]">
						Это и основное преимущество, и главный недостаток внимания: метод
						способен обрабатывать огромные последовательности, но с ростом
						контекста вычисления масштабируются квадратично.
					</p>
				</div>
				<div>
					<ImageContainer
						src={"/images/image-34.png"}
						className="sc-w-[476px] sc-h-[464px] relative"
					/>
				</div>
			</div>
			<div className="m-auto flex w-2/3 flex-col">
				<p className="sc-text-4 text-center font-semibold">
					Чтобы посчитать внимание так, как это происходит в LLM, для каждого
					токена нам понадобится расчитать три вектора:
				</p>
				<div className="sc-gap-2 flex flex-col">
					<div className="sc-p-3 sc-gap-2 flex flex-col border">
						<span className="sc-text-4 text-[#151515]">Запрос (Query)</span>
						<p className="sc-text-[14px]">
							Это то, с помощью чего конкретный токен «смотрит» на другие
							токены. Он пытается найти среди них нужную информацию, чтобы лучше
							понять самого себя.
						</p>
					</div>
					<div className="sc-p-3 sc-gap-2 flex flex-col border">
						<span className="sc-text-4 text-[#151515]">Ключ (Key)</span>
						<p className="sc-text-[14px]">
							То, что отвечает на запрос токена. С помощью ключа вычисляется,
							насколько важен конкретный токен для запроса (это веса внимания).
						</p>
					</div>

					<div className="sc-p-3 sc-gap-2 flex flex-col border">
						<span className="sc-text-4 text-[#151515]">Значение (Value)</span>
						<p className="sc-text-[14px]">
							Информация, которую токен передаёт другим токенам,
							если они посчитали его важным.
						</p>
					</div>
				</div>
			</div>
			<p>
				Эти векторы получаются путем умножения входных эмбеддингов* слов на
				некоторые матрицы весов <strong>Wq, Wk </strong> и <strong>Wv.</strong>{" "}
				Эти матрицы — обучаемые, то есть меняются по мере тренировки сети, делая
				запросы, ключи и значения точнее.
			</p>
			<div className="sc-gap-6 flex flex-col">
				<div>
					<InfoBox arrowPosition="bottom" arrowOffset="160px">
						<p className="sc-p-4">Это вектор входных данных</p>
					</InfoBox>
				</div>
				<div className="sc-gap-6 flex flex-col">
					<div className="sc-gap-4 flex items-center">
						<div>
							<ImageContainer
								fit={"cover"}
								src={"/images/image-35.png"}
								className="sc-w-[270px] sc-h-[111px] relative"
							/>
						</div>
						<div>
							<InfoBox arrowPosition="left" arrowOffset="60px">
								<p className="sc-p-4">
									<strong>Вектор Query </strong>
									играет роль вектора-запроса информации. Он как бы спрашивает
									у остальных векторов «Есть ли у вас что‑нибудь связанное
									вот с этим токеном?»
								</p>
							</InfoBox>
						</div>
					</div>
					<div className="sc-gap-4 flex items-center">
						<div>
							<ImageContainer
								fit={"cover"}
								src={"/images/image-36.png"}
								className="sc-w-[270px] sc-h-[111px] relative"
							/>
						</div>
						<div>
							<InfoBox arrowPosition="left" arrowOffset="70px">
								<p className="sc-p-4">
									<strong>Вектор Key </strong>
									предоставляет ответ на вопрос «Какая информация содержится
									внутри этого токена?». При этом саму информацию ключ
									не предоставляет, он как бы только сообщает,
									есть ли она и в каком количестве.
								</p>
							</InfoBox>
						</div>
					</div>{" "}
					<div className="sc-gap-4 flex items-center">
						<div>
							<ImageContainer
								fit={"cover"}
								src={"/images/image-37.png"}
								className="sc-w-[270px] sc-h-[111px] relative"
							/>
						</div>
						<div>
							<InfoBox arrowPosition="left" arrowOffset="40px">
								<p className="sc-p-4">
									<strong>Вектор Value </strong>
									предоставляет непосредственно необходимую информацию.
								</p>
							</InfoBox>
						</div>
					</div>
				</div>
			</div>
			<p>Пример на задаче перевода</p>
			<div className="sc-gap-4 flex">
				<div className="sc-gap-1 flex flex-col">
					<InfoBox arrowPosition="right" arrowOffset="135px">
						<p className="sc-p-4">
							Дальше путём перемножения векторов значений на веса внимания
							извлекаем из всех токенов нужное количество релевантной
							информации. Складывая всю эту информацию, получаем заветный вектор
							внимания.
						</p>
					</InfoBox>
					<InfoBox arrowPosition="right" arrowOffset="85px">
						<p className="sc-p-4">
							Перемножая наш запрос на ключи других токенов, мы получаем веса
							внимания (жёлтые столбики на схеме). А softmax — это просто
							нормализация, чтобы все веса были от 0 до 1.
						</p>
					</InfoBox>
					<InfoBox arrowPosition="right" arrowOffset="48px">
						<p className="sc-p-4">
							Для «коти» мы считаем вектор запроса, а для остальных токенов
							векторы ключей и значений
						</p>
					</InfoBox>

					<InfoBox arrowPosition="right" arrowOffset="19px">
						<p className="sc-p-4 sc-w-[600px]">Это эмбеддинги</p>
					</InfoBox>

					<InfoBox arrowPosition="right" arrowOffset="22px">
						<p className="sc-p-4 sc-w-[600px]">
							Предположим, сейчас мы обрабатываем токен «котю»
						</p>
					</InfoBox>
				</div>
				<div>
					<ImageContainer
						src={"/images/image-38.png"}
						className="sc-w-[371px] sc-h-[540px] relative"
					/>
				</div>
			</div>
			<p>
				*Эмбеддинг — это входное представление токенов. Дело в том, что на вход
				машине мы можем подать только числа. Поэтому токены приходится
				кодировать в векторы эмбеддингов так, чтобы сеть могла понять их смысл.
				Если два слова похожи по значению, то и их эмбеддинги будут похожи друг
				на друга.
			</p>
			<div className="sc-gap-6 flex flex-col">
				<div className="sc-w-[687px] self-end">
					<InfoBox arrowPosition="bottom" arrowOffset="627px">
						<p className="sc-p-4">
							Вот это обозначение транспонирования, то есть “переворачивания”
							матрицы
						</p>
					</InfoBox>
				</div>
				<div className="sc-gap-6 flex items-center">
					<InfoBox arrowPosition="right" arrowOffset="39px">
						<p className="sc-p-4">
							Математически, формула расчета внимания выглядит вот так
						</p>
					</InfoBox>
					<div>
						<ImageContainer
							src={"/images/image-39.png"}
							className="sc-w-[492px] sc-h-[128px] relative"
						/>
					</div>
				</div>
				<div className="sc-w-[687px] self-end">
					<InfoBox arrowPosition="top" arrowOffset="627px">
						<p className="sc-p-4">
							Деление на корень из размерности вектора ключей помогает
							сбалансировать распределение весов внимания: это нужно для
							стабильности сети
						</p>
					</InfoBox>
				</div>
				<div className="sc-gap-6 flex items-center">
					<InfoBox arrowPosition="right" arrowOffset="39px">
						<p className="sc-p-4">Но легче представлять её вот так</p>
					</InfoBox>
					<div>
						<ImageContainer
							src={"/images/image-40.png"}
							className="sc-w-[620px] sc-h-[190px] relative"
						/>
					</div>
				</div>
			</div>
			<p className="sc-p-4 bg-myblue sc-text-4 rounded-lg border font-semibold text-[#151515]">
				Это самая классическая реализация механизма внимания. Однако в
				современных языковых моделях в основном используется расширенная версия
				под названием Multi-Head Attention.
			</p>
			<p>
				В самом вычислении внимания тут ничего не меняется.{" "}
				<strong>
					Просто вместо того, чтобы рассчитывать внимание один раз, мы делаем
					это несколько раз параллельно. 
				</strong>
			</p>
			<p className="sc-p-4 bg-myblue sc-text-4 rounded-lg border font-semibold text-[#151515]">
				Зачем это нужно? Одно и то же слово в предложении образует с другими
				словами множество разных грамматических и смысловых связей. Одна
				«голова» внимания обычно улавливает какую‑то одну связь. Используя
				несколько голов одновременно, модель может «заметить» сразу несколько
				отношений между словами и лучше понять смысл.
			</p>
			<div className="sc-gap-4 flex">
				<div>
					<ImageContainer
						src={"/images/image-41.png"}
						className="sc-w-[396px] sc-h-[377px] relative"
					/>
				</div>
				<div className="sc-gap-6 flex flex-col">
					<InfoBox arrowPosition="left" arrowOffset="72px">
						<p className="sc-p-4">
							Все вычисленные векторы внимания склеиваются в один и проходят
							через ещё один обычный линейный слой. После этого получается
							финальное представление внимания
						</p>
					</InfoBox>
					<InfoBox arrowPosition="left" arrowOffset="55px">
						<p className="sc-p-4">
							Для всей последовательности вычисляем внимание не один раз,
							а восемь (столько здесь голов внимания)
						</p>
					</InfoBox>
					<InfoBox arrowPosition="left" arrowOffset="24px">
						<p className="sc-p-4">Входная последовательность</p>
					</InfoBox>
				</div>
			</div>
			<p className="sc-p-4 rounded-lg border font-semibold text-[#151515]">
				Наконец, мы готовы переходить к трансформерам – душе и телу больших
				языковых моделей.
			</p>
		</div>
	)
}

export default MechanismAttention
