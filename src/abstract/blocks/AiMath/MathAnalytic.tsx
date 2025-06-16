import BlueCheckMark from "@/abstract/components/BlueCheckMark/BlueCheckMark"
import ImageContainer from "@/abstract/components/ImageContainer/ImageContainer"
import InfoBox from "@/abstract/components/InfoBox/InfoBox"
import Title from "@/abstract/components/Text/Title"
import Image from "next/image"
import MathSvgBlock from "./SvgBlock"

const MathAnalytic = () => {
	return (
		<div className="sc-text-5">
			<Title id="calculus">Математический анализ</Title>
			<div className="sc-gap-4 flex flex-col text-[#464646]">
				<p>
					Математический анализ — это раздел математики, который изучает
					поведение функций. К мат.анализу относятся, например, такие понятия,
					как предел, непрерывность, интегрирование и, конечно,
					дифференцирование, то есть <strong>производные</strong>.
				</p>
				<p>
					Роль производных в современных нейросетях сложно переоценить:
					на них строится весь процесс обучения. Но обо всем по порядку.
				</p>
			</div>
			<div className="sc-mt-8 sc-gap-3 flex text-[#151515]">
				<p className="sc-p-4 rounded-lg border">
					Производная функции показывает, как быстро та изменяется в конкретной
					точке.
				</p>
				<p className="sc-p-4 rounded-lg border">
					Геометрически это соответствует тангенсу угла наклона касательной.
				</p>
			</div>
			<div className="sc-h-[450px] sc-mt-6 relative m-auto w-8/10">
				<Image src={"/images/image-21.png"} alt={""} fill />
			</div>
			<p className="sc-p-4 sc-mt-6 rounded-lg border font-normal text-[#151515]">
				Наши модели искусственного интеллекта — это тоже математические функции
			</p>
			<div className="sc-mt-4">
				<div className="sc-gap-2 flex">
					<div className="sc-gap-3 flex w-2/3 flex-col items-end">
						<InfoBox arrowPosition="bottom" arrowOffset="300px">
							<p className="sc-p-4">
								Результат «работы» функции — выходные данные.
							</p>
						</InfoBox>
						<div>
							<ImageContainer
								src={"/images/image-22.png"}
								className="sc-w-[468px] sc-h-[90px] relative"
							/>
						</div>
					</div>
					<div className="sc-w-[420px] sc-mt-7">
						<InfoBox arrowPosition="left" arrowOffset="70px">
							<p className="sc-p-4">
								Это входные данные — переменные, от которых зависит наша функция
								или модель
							</p>
						</InfoBox>
					</div>
				</div>
				<div className="sc-ml-20 sc-mt-3 w-7/10">
					<InfoBox arrowOffset="170px" arrowPosition="top">
						<p className="sc-p-4">
							Это модель. Она принимает на вход данные, что‑то с ними делает,
							и на выходе мы получаем ответ — значение функции.
						</p>
					</InfoBox>
				</div>
			</div>
			<div className="sc-gap-4 sc-p-4 sc-text-4 bg-myblue sc-mt-5 m-auto flex flex-col rounded-lg border font-semibold">
				<p>
					Получив от нейросети ответы, мы можем сравнить их с истиной
					и посчитать ошибку. Наша задача — минимизировать эту ошибку.
				</p>
				<p>
					Таким образом, обучение модели — это процесс подбора таких весов
					нейросети, чтобы результат был как можно ближе к правильному ответу.
					Это задача оптимизации, и для её решения нам и нужны производные.
				</p>
			</div>
			<div className="sc-gap-4 sc-mt-6 flex">
				<div className="sc-gap-4 flex flex-col text-[#464646]">
					<p>
						Однако, как видите, наша функция-модель зависит уже не от одного
						параметра, в отличие от той, которую мы разбирали в начале главы.
					</p>
					<p>
						Здесь переменных функции может быть тысячи, так как на вход сети
						поступает много данных.
					</p>
					<p>
						В этом случае мы говорим уже не об одной производной, а о{" "}
						<strong>векторе их них.</strong> По каждой переменной мы можем взять
						так называемую частную производную. Собрав их все вместе, мы получим
						<strong> градиент.</strong>
					</p>
				</div>
				<div className="sc-gap-2 flex flex-col">
					<div>
						<ImageContainer
							src={"/images/image-23.png"}
							className="sc-h-[242px] relative w-full"
						/>
					</div>
					<p className="sc-p-4 sc-text-4 bg-myblue rounded-lg border font-semibold">
						Кроме того, градиент показывает, насколько функция чувствительна к
						изменению определенной переменной. Например, если по переменной x1
						градиент равен 1.5, а по переменной x2 – 0.1, то при изменении
						только x1 функция будет возрастать в 15 раз быстрее, чем при
						изменении только x2.
					</p>
				</div>
			</div>
			<p className="sc-mt-2 text-[#464646]">
				Градиент показывает направление скорейшего возрастания функции. А если
				пойти в противоположном направлении <strong>(анти-градиент)</strong>, то
				это будет путь скорейшего убывания. На этом свойстве основан{" "}
				<strong>
					алгоритм градиентного спуска, благодаря которому и обучаются
					нейросети.
				</strong>
			</p>
			<div className="sc-w-[830px] sc-h-[563px] sc-mt-5 m-auto">
				<MathSvgBlock />
			</div>
			<div className="sc-mt-10 sc-text-4 m-auto w-7/10">
				<p className="font-semibold">
					Градиентный спуск позволяет минимизировать функцию ошибки предсказаний
				</p>
				<ol className="sc-gap-2 flex w-9/10 list-decimal flex-col font-medium">
					<div className="sc-px-8 sc-py-3 border">
						<li>Считаем градиент функции ошибки в текущей точке.</li>
					</div>
					<div className="sc-px-8 sc-py-3 border">
						<li>Делаем шаг в сторону уменьшения ошибки. </li>
					</div>
					<div className="sc-pl-8 sc-pr-3 sc-py-3 border">
						<li>
							Повторяем все много раз, пока ошибка не станет достаточно
							маленькой.
						</li>
					</div>
				</ol>
			</div>
			<div className="sc-gap-5 sc-mt-5 flex flex-col text-[#464646]">
				<p>Математически все это можно записать одной формулой:</p>
				<div className="sc-gap-4 flex">
					<InfoBox arrowPosition="bottom" arrowOffset="20px">
						<p className="sc-p-4">Обновленные веса</p>
					</InfoBox>
					<div className="w-8/10">
						<InfoBox arrowPosition="bottom" arrowOffset="220px">
							<p className="sc-p-4">
								Шаг оптимизации (learning rate) — коэффициент, который
								показывает, насколько велик наш шаг в сторону анти-градиента.
							</p>
						</InfoBox>
					</div>
				</div>
				<div className="sc-gap-4 flex">
					<div className="sc-gap-4 flex w-2/3 flex-col">
						<ImageContainer
							src="/images/image-24.png"
							className="sc-w-[628px] sc-h-[102px] relative"
						/>
						<div className="sc-gap-2 flex">
							<div className="sc-w-[400px]">
								<InfoBox arrowPosition="top" arrowOffset="280px">
									<div className="sc-p-4 sc-gap-3 flex flex-col">
										<p>
											Текущие веса, из которых мы вычитаем градиент, умноженный
											на learning rate.
										</p>
										<p>
											Вычитаем, потому что нам нужно двигаться в сторону
											убывания.
										</p>
									</div>
								</InfoBox>
							</div>
							<div>
								<InfoBox arrowPosition="top" arrowOffset="75px">
									<p className="sc-p-4">Градиент</p>
								</InfoBox>
							</div>
						</div>
					</div>
					<div>
						<InfoBox arrowPosition="left" arrowOffset="20px">
							<p className="sc-p-4">
								Функция, которую мы оптимизируем. Она называется функцией
								потерь, лоссом (от слова loss) или лосс-функцией.
							</p>
						</InfoBox>
					</div>
				</div>
			</div>
			<p className="sc-p-4 sc-text-4 bg-myblue sc-mt-5 m-auto w-8/10 rounded-lg border font-semibold">
				Выбор коэффициента learning rate может довольно сильно влиять
				на результаты обучения. Если он слишком мал, то мы рискуем не дойти
				до оптимума, а если слишком велик, то алгоритм будет «скакать» вокруг
				оптимума и, опять же, никогда туда не попадёт.
			</p>
			<div className="sc-gap-4 sc-mt-5 flex flex-col">
				<p>
					<strong>В случае LLM</strong> мы решаем задачу предсказания следующего
					токена* и минимизируем функцию, которая называется{" "}
					<strong>кросс-энтропия.</strong>
				</p>
				<p>
					<strong>
						Нейросеть должна правильно «угадать» следующий токен. Для этого для
						каждого токена модель выдаёт свою вероятность – вероятность того,
						что, как она “считает”, этот токен будет в тексте следующим
					</strong>
				</p>
			</div>
			<p className="sc-p-4 sc-text-4 bg-myblue sc-mt-5 m-auto w-fit rounded-lg border font-semibold">
				В реальных данных истинный следующий токен имеет вероятность 1,
				а остальные — 0.
			</p>
			<p className="sc-p-4 sc-mt-4 rounded-lg border">
				<strong>
					Кросс-энтропия говорит, насколько далеко модель от правильного ответа
				</strong>
				, то есть показывает, насколько сильно различаются два распределения
				вероятностей — истинное и предсказанное
			</p>
			<div className="sc-gap-4 sc-mt-5 flex flex-col text-[#464646]">
				<p>
					*Токен — это единица текста. Это не совсем слог, и не совсем
					слово, ибо модель делит текст так, как ей «удобнее» (так,
					чтобы в словаре уникальных токенов было как можно меньше).
				</p>
				<p>
					Например, слово «дом» — это один токен, а слово «нейросеть» может
					разделиться на два: «нейро» и «сеть». Токенами также бывают знаки
					препинания и специальные символы.
				</p>
			</div>
			<div className="m-auto flex w-fit flex-col">
				<div className="sc-gap-7 flex">
					<div className="sc-w-[382px] sc-top-10 sc-right-10 relative">
						<InfoBox arrowPosition="bottom" arrowOffset="360px">
							<p className="sc-p-4">
								Количество возможных токенов (размер словаря модели)
							</p>
						</InfoBox>
					</div>
					<div className="sc-w-[156px] sc-top-10 sc-right-10 relative">
						<InfoBox arrowPosition="bottom" arrowOffset="20px">
							<p className="sc-p-4">Истинная вероятность токена i</p>
						</InfoBox>
					</div>
				</div>
				<ImageContainer
					src={"/images/image-25.png"}
					className="sc-w-[628px] sc-h-[175px] relative"
				/>
				<div></div>
				<div className="sc-gap-7 flex">
					<div className="sc-w-[210px] sc-bottom-10 relative">
						<InfoBox arrowPosition="top" arrowOffset="180px">
							<p className="sc-p-4">Значение лосса (кросс-энтропии)</p>
						</InfoBox>
					</div>
					<div className="sc-w-[542px] sc-bottom-5 relative">
						<InfoBox arrowPosition="top" arrowOffset="260px">
							<p className="sc-p-4">
								Вероятность, предсказанная моделью для токена i (логарифмируя,
								превращаем произведение в сумму, это вычислительно легче)
							</p>
						</InfoBox>
					</div>
				</div>
			</div>
			<div className="sc-mt-5 sc-gap-5 flex flex-col items-center">
				<p className="w-full">
					<strong>Например</strong> сеть должна предсказать слово после «Я
					люблю». <strong>Результат:</strong>
				</p>
				<ImageContainer
					src={"/images/image-26.png"}
					className="sc-w-[696px] sc-h-[152px] relative"
				/>
				<svg
					viewBox="0 0 16 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="sc-w-4 sc-h-5"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M16 12.5789C12.1817 12.5789 9 15.8525 9 20L7 20C7 15.8525 3.81828 12.5789 -1.49539e-07 12.5789L-4.11807e-07 10.5789C2.84565 10.5789 5.35799 11.951 7 14.0788L7 -3.0598e-07L9 -3.93402e-07L9 14.0788C10.642 11.951 13.1544 10.5789 16 10.5789L16 12.5789Z"
						fill="#151515"
					/>
				</svg>
				<div className="-sc-mt-5">
					<p className="sc-p-4 sc-top-5 relative m-auto w-fit rounded-lg border bg-white font-semibold">
						Значит, кросс-энтропия в этом случае будет:
					</p>
					<ImageContainer
						src={"/images/image-27.png"}
						className="sc-w-[716px] sc-h-[141px] relative"
					/>
				</div>
				<div className="sc-gap-[60px] sc-left-[80px] relative flex">
					<div>
						<InfoBox arrowPosition="top" arrowOffset="100px">
							<p className="sc-p-4">Все это зануляется</p>
						</InfoBox>
					</div>

					<div className="sc-w-[352px]">
						<InfoBox arrowPosition="top" arrowOffset="175px">
							<p className="sc-p-4">
								Остается только предсказанная вероятность истинного токена
							</p>
						</InfoBox>
					</div>
				</div>
				<div className="sc-gap-2 flex flex-col">
					<p className="sc-p-3 sc-gap-2 sc-text-4 flex items-center border">
						<BlueCheckMark />
						Алгоритм оптимизации (градиентный спуск)
					</p>
					<p className="sc-p-3 sc-gap-2 sc-text-4 flex items-center border">
						<BlueCheckMark />
						Лосс-функция (кросс-энтропия)
					</p>
				</div>
				<div className="sc-text-4 flex flex-col text-center text-[#151515]">
					<p className="font-semibold">Все готово для обучения нейросети?</p>
					<p className="sc-p-3 bg-myblue border">На самом деле еще не совсем</p>
				</div>
			</div>
			<div className="sc-gap-2 flex flex-col">
				<p>
					Чтобы успешно применять градиентный спуск, нужно уметь эффективно{" "}
					<strong>вычислять градиенты лосса.</strong> Это не так сложно, когда
					речь идет о небольшой игрушечной нейросети вроде вот этой
				</p>
				<div className="sc-gap-6 flex">
					<div>
						<ImageContainer
							src={"/images/image-28.png"}
							className="sc-w-[368px] sc-h-[292px] relative"
						/>
					</div>
					<div className="sc-gap-6 flex flex-col text-[#464646]">
						<p>
							Тут легко выписать, как выходы y зависят от входов x, учитывая все
							слои, и взять от получившегося выражения градиент
						</p>
						<p>
							Но когда речь идет о настоящих LLM с миллиардами параметров и
							сотнями слоев, вычисления становятся настолько запутанными и
							объемными, что с{" "}
							<strong color="#151515">
								взятием производных “в лоб” не справится ни один компьютер.
							</strong>
						</p>
						<p>
							<strong color="#151515">
								Поэтому на помощь приходит метод обратного распространения
								ошибки (backward propagation)
							</strong>
						</p>
					</div>
				</div>
			</div>
			<div className="sc-gap-5 sc-mt-8 flex flex-col">
				<p>Рассмотрим на интуитивно-понятном примере:</p>
				<div>
					<ImageContainer
						src={"/images/image-29.png"}
						className="sc-w-[952px] sc-h-[694px] relative"
					/>
				</div>
			</div>
			<div className="sc-px-10 mt-10">
				<ol className="sc-gap-3 flex list-decimal flex-col">
					<li className="sc-px-5">
						Входные данные (например, предложение “Гарри и Поттер и философский
						...”), для которого нужно предсказать следующий токен
					</li>
					<li className="sc-px-5">
						Скрытые слои, на которых сеть обрабатывает информацию. Конкретно
						такой их вид, как на картинке, называют линейным или полносвязным.
					</li>
					<li className="sc-px-5">
						Значения, которые нейроны принимают при обработке конкретных данных,
						называют активациями
					</li>
					<li className="sc-px-5">Выходные значения – вероятности слов</li>
					<li className="sc-px-5">
						Предположим, это правильный токен (“камень”). Но сеть пока угадывает
						его не очень хорошо
					</li>
					<li className="sc-px-5">
						Нам бы хотелось, чтобы этот нейрон был “ярче”, а остальные
						“бледнее”. Но на сами активации мы повлиять не можем (они уже
						вычислены). Зато можем изменить веса на предыдущих слоях, чтобы в
						следующий раз результат был правильнее.
					</li>
					<li className="sc-px-5">
						Зная, каким образом какие нейроны с предыдущего слоя повлияли на
						результат, мы можем пропорционально изменить веса (те нейроны,
						которые больше повлияли на результат, получат большее изменение).
					</li>
					<li className="sc-px-5">
						Благодаря градиентам мы знаем, какие нейроны с этого слоя повлияли
						на наш “целевой” нейрон сильнее всего (вспомните интерпретацию
						градиента). При этом не нужно вычислять градиент по всей сети:
						достаточно сосчитать его“на месте”, то есть только для этого
						слоя.{" "}
					</li>
					<li className="sc-px-5">
						Аналогично, мы бы хотели, чтобы какие-то активации нейронов
						предпоследнего (третьего) слоя были “ярче”, а какие-то “бледнее”. На
						сами активации повлиять не можем, так что двигаемся к слою два, и
						меняем на нем веса, ориентируясь на новые градиенты.
					</li>
					<li className="sc-px-5">
						Такой цепной реакцией проходим по всем слоям, постепенно вычисляя
						градиенты и меняя веса слой за слоем.
					</li>
				</ol>
			</div>
			<div className="sc-mt-6">
				<p className="sc-p-4 sc-text-4 bg-myblue sc-top-3 relative -z-1 flex-col rounded-lg border font-semibold">
					Резюме: алгоритм обратного распространения ошибки существует для того,
					чтобы эффективно вычислять градиенты и менять веса сети.
				</p>
				<div className="sc-h-[160px] sc-w-[683px] relative z-0 m-auto">
					<Image fill src={"/images/image-30.png"} alt="1" />
				</div>
				<p className="sc-p-4 sc-text-4 bg-myblue sc-bottom-3 relative -z-1 flex-col rounded-lg border font-semibold">
					Сначала сеть делает прогноз и смотрит, насколько ошиблась. Это
					называется прямой проход.
				</p>
			</div>
			<div className="sc-mt-6">
				<div className="sc-h-[204px] sc-w-[773px] relative z-0 m-auto">
					<Image fill src={"/images/image-31.png"} alt="1" />
				</div>
				<p className="sc-p-4 sc-text-4 sc-bottom-3 relative -z-1 rounded-lg border font-semibold">
					Затем ошибка «движется» обратно по слоям нейросети — от выхода ко
					входу. На каждом шаге алгоритм вычисляет, насколько нейроны каждого
					слоя повлияли на итоговый результат, и меняет их веса так, чтобы
					уменьшить ошибку. Это называется обратный проход.
				</p>
			</div>
			<p className="sc-p-4 sc-text-4 bg-myblue sc-mt-10 flex-col rounded-lg border font-semibold">
				Кстати, математически обратное распространение ошибки основано на
				довольно простой формуле производной сложной функции, которую обычно
				проходят в школе.
			</p>
			<div className="sc-gap-6 sc-mt-4 flex items-center">
				<div>
					<InfoBox arrowPosition="right" arrowOffset="103px">
						<div className="sc-p-4 sc-gap-4 flex flex-col">
							<p>
								Суть в том, что модель – это тоже сложная функция, потому что
								результат – это композиция слоев.
							</p>
							<p>
								Поэтому то градиенты и можно вычислять последовательно, в ходе
								одного обратного прохода.
							</p>
						</div>
					</InfoBox>
				</div>
				<div className="sc-w-[435px] sc-h-[100px] relative">
					<ImageContainer
						className="sc-w-[435px] sc-h-[100px] relative"
						src={"/images/image-32.png"}
					/>
				</div>
			</div>
			<div className="sc-gap-3 sc-mt-[100px] m-auto flex w-6/10 flex-col">
				<p className="sc-text-4 font-semibold">
					Итак, у нас есть всё необходимое для обучения нейросети.
				</p>
				<div className="sc-gap-2 flex flex-col">
					<div className="sc-p-3 sc-gap-2 sc-text-4 flex items-center border">
						<BlueCheckMark />
						Мы знаем, что такое тензоры и как нейросеть работает с ними
					</div>
					<div className="sc-p-3 sc-gap-2 sc-text-4 flex items-center border">
						<BlueCheckMark />
						Мы разобрались с тем, как работает loss-функция
					</div>{" "}
					<div className="sc-p-3 sc-gap-2 sc-text-4 flex items-baseline border">
						<div>
							<BlueCheckMark />
						</div>
						Мы знаем, как сеть использует градиентный спуск и алгоритм обратного
						распространения ошибки, чтобы уменьшить ошибки
					</div>
				</div>
			</div>
			<p className="sc-p-4 sc-text-4 sc-mt-10 rounded-lg border font-semibold">
				Осталось самое интересное — определиться с архитектурой нейросети,
				которую мы будем обучать. Этим мы и займёмся в следующих главах.
			</p>
		</div>
	)
}

export default MathAnalytic
