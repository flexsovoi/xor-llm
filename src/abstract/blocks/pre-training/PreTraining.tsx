import BlackPoint from "@/abstract/components/BlackPoint"
import ImageContainer from "@/abstract/components/ImageContainer/ImageContainer"
import { NumberPoint } from "@/abstract/components/NumberPoint/NumberPoint"
import Title from "@/abstract/components/Text/Title"

const PreTraining = () => {
	return (
		<div className="sc-text-5 sc-gap-6 flex flex-col text-[#464646]">
			<Title id="pretraining">Предобучение</Title>

			<div className="sc-gap-5 flex">
				<div>
					<ImageContainer
						src={"/images/image-53.png"}
						className="sc-w-[348px] sc-h-[246px] relative"
					/>
				</div>
				<div className="sc-gap-4 flex flex-col">
					<p>С математикой процесса — разобрались.</p>
					<p>С архитектурой — тоже разобрались.</p>
					<p>
						Осталось глубже погрузиться в сам процесс обучения. Ведь архитектура
						и математика — это только фундамент, чтобы получить умную модель,
						ей нужно «прочитать» огромное количество текстов и запомнить
						из них важную информацию. Этот этап называется{" "}
						<strong>предобучением (pre-training).</strong>
					</p>
				</div>
			</div>
			<p>
				На этом этапе модель видит миллиарды символов из книг, интернета,
				научных статей и других источников и учится понимать язык на глубоком
				уровне. В этой главе мы подробно рассмотрим, как именно проходит процесс
				предобучения, какие данные для него используются, и что такое
				<strong>self-supervised learning.</strong>
			</p>
			<p>
				<strong>Для начала еще раз про процесс обучения, на примере.</strong>
				Предположим, на вход нам пришел огромный текст (какая-нибудь книжка о
				Гарри Поттере). Как мы будем на нем учится?
			</p>
			<div className="sc-gap-6 flex">
				<div className="sc-gap-8 flex w-1/2 flex-col">
					<div className="flex flex-col items-center">
						<div className="sc-gap-4 flex items-baseline">
							<div>
								<NumberPoint>1</NumberPoint>
							</div>
							<p>
								Во‑первых, мы разобьём этот текст на токены, а токенам
								сопоставим их id.
							</p>
						</div>
						<div>
							<ImageContainer
								src={"/images/image-54.png"}
								className="sc-w-[402px] sc-h-[248px] relative"
							/>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<div className="sc-gap-4 flex items-baseline">
							<div>
								<NumberPoint>3</NumberPoint>
							</div>
							<p>
								Затем созданные нами чанки начинают поступать в модель для
								обучения. Модель получает задание: предсказать следующий токен в
								каждом месте последовательности.
							</p>
						</div>
					</div>
				</div>
				<div className="w-1/2">
					<div className="flex flex-col items-center">
						<div className="sc-gap-4 flex items-baseline">
							<div>
								<NumberPoint>2</NumberPoint>
							</div>
							<p>
								Во-вторых, мы разделим токенизированный текст на кусочки (
								<strong>чанки</strong>). Например, по 512 токенов в каждом. Это
								наше <strong>контекстное окно</strong>. Чем больше окно, тем
								длиннее контекст, и тем больше информации модель учитывает при
								предсказании. У современных моделей контекст достигает сотен
								тысяч токенов.
							</p>
						</div>
						<div>
							<ImageContainer
								fit="cover"
								src={"/images/image-55.png"}
								className="sc-w-[492px] sc-h-[183px] relative"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="sc-gap-8 sc-text-4 sc-mt-6 m-auto flex w-8/10 items-center">
				<div className="sc-p-3 sc-w-[293px] border">
					<p>Например, если на вход приходит последовательность токенов</p>
					<p className="text-[#151515]">
						[Гарри, Поттер, взял, волшебную, палочку, и,…]
					</p>
				</div>
				<svg
					className="sc-w-[20px] sc-h-[16px]"
					viewBox="0 0 20 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.5789 6.48769e-07C12.5789 3.81828 15.8525 7 20 7L20 9C15.8525 9 12.5789 12.1817 12.5789 16L10.5789 16C10.5789 13.1544 11.951 10.642 14.0788 9L-6.11959e-07 9L-7.86805e-07 7L14.0788 7C11.951 5.35799 10.5789 2.84565 10.5789 8.23615e-07L12.5789 6.48769e-07Z"
						fill="#151515"
					/>
				</svg>
				<div className="sc-p-3 sc-w-[444px] border">
					<p>…то последовательность предсказаний будет такой:</p>
					<p className="text-[#151515]">Гарри → Поттер</p>
					<p className="text-[#151515]">Гарри Поттер → взял</p>
					<p className="text-[#151515]">Гарри Поттер взял → волшебную</p>
				</div>
			</div>
			<div className="sc-p-4 sc-text-4 bg-myblue sc-gap-4 flex flex-col rounded-lg border font-semibold text-[#151515]">
				<p>
					Во время инференса реальный следующий токен — не обязательно самый
					вероятный. Это можно контролировать с помощью специального параметра
					«температура» — чем она ниже, тем чаще модель выбирает просто самый
					вероятный следующий токен
				</p>
				<p>
					Это подходит для строгих задач, требущих краткого точного ответа.
					Ну а чем температура выше — тем ответы модели разнообразнее
					и креативнее.
				</p>
			</div>
			<div className="sc-gap-6 flex">
				<div className="sc-gap-8 flex w-1/2 flex-col">
					<div className="flex flex-col items-center">
						<div className="sc-gap-4 flex items-baseline">
							<div>
								<NumberPoint>4</NumberPoint>
							</div>
							<p>
								Только тут следует помнить о том, что в трансформере нет
								последовательной обработки, поэтому модель видит весь текст
								сразу. При этом, чтобы избежать подглядывания при предсказании,
								применяются маски (их мы разбирали в предыдущем разделе).
							</p>
						</div>
						<div className="sc-p-3 border">
							<p>Например, для токена «Поттер»:</p>
							<p className="text-[#151515]">Виден токен «Гарри»</p>
							<p className="text-[#151515]">
								Не видны «взял, волшебную, палочку,…»
							</p>
						</div>
					</div>
				</div>
				<div className="w-1/2">
					<div className="flex flex-col items-center">
						<div className="sc-gap-4 flex items-baseline">
							<div>
								<NumberPoint>5</NumberPoint>
							</div>
							<p>
								Предсказания модель делает в виде вероятностей для каждого
								возможного следующего токена.
							</p>
						</div>
						<div className="sc-p-3 border">
							<p>Например, предсказываем токен после «Гарри Поттер взял».</p>
							<p className="text-[#151515]">Модель выдаёт:</p>
							<p className="text-[#151515]">волшебную: 0.78</p>
							<p className="text-[#151515]">метлу: 0.15</p>
							<p className="text-[#151515]">шапку: 0.04</p>
							<p className="text-[#151515]">котёл: 0.03</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center">
				<div className="sc-gap-4 flex items-baseline">
					<div>
						<NumberPoint>6</NumberPoint>
					</div>
					<div className="sc-gap-4 flex flex-col">
						<p>
							<strong>Вычисляем ошибку</strong> предсказания таким способом, как
							мы разбирали в главе про математику и применяем{" "}
							<strong>алгоритм обратного распространения ошибки.</strong>
						</p>
						<p>
							На практике такие чанки обрабатываются партиями (батчами). На вход
							модели поступает батч (например, это 32 окна по 512 токенов),
							который проходит через модель. Сначала прямой проход, затем
							обратный. Это один шаг обучения, называемый итерацией.{" "}
						</p>
						<p>
							Спустя несколько итераций модель увидит весь датасет. Это
							называется эпоха. Обычно таких эпох по время обучения много, то
							есть мы несколько раз гоняем датасет по модели для того, чтобы она
							хорошо его усвоила.
						</p>
					</div>
				</div>
			</div>
			<p>
				Хороший пример, иллюстрирующий логику итераций и эпох на разных размерах
				батча:
			</p>
			<div>
				<ImageContainer
					fit="cover"
					src={"/images/image-56.png"}
					className="sc-w-[952px] sc-h-[341px] relative"
				/>
			</div>
			<div className="sc-p-4 sc-text-4 bg-myblue sc-gap-4 flex flex-col rounded-lg border font-semibold text-[#151515]">
				<p>
					Сколько будет эпох и какого размеры брать батчи — решает разработчик.
					Тут важно поймать баланс: слишком большой батч может не вместится
					в память, слишком маленький — это неэффективное использование памяти.
					С эпохами тоже все не очень просто.
				</p>
				<p>
					Если их слишком мало — модель может недообучиться. Если много —
					переобучится, и снова будет плохо. Приходится экспериментально искать
					золотую середину.
				</p>
			</div>
			<div>
				<p>
					Обратите внимание, что в алгоритме выше мы используем{" "}
					<strong>данные без меток</strong>, то есть обыкновенные тексты, никем
					специально не размеченные. Модель просто учится предсказывать
					следующий токен, для этого ей не требуются человеческие метки. Такой
					подход называется {" "}
					<strong>self-supervised learning (самообучение).</strong>
				</p>
				<div className="sc-mt-3 sc-gap-2 flex">
					<div className="sc-p-3 flex w-1/2 flex-col justify-between border">
						<svg
							className="sc-w-[24px] sc-h-[24px]"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x={0.5}
								y={0.5}
								width={23}
								height={23}
								rx={11.5}
								fill="white"
							/>
							<rect
								x={0.5}
								y={0.5}
								width={23}
								height={23}
								rx={11.5}
								stroke="#151515"
							/>
							<g clipPath="url(#clip0_1_3934)">
								<path
									d="M11.3335 11.332V7.33203H12.6668V11.332H16.6668V12.6654H12.6668V16.6654H11.3335V12.6654H7.3335V11.332H11.3335Z"
									fill="#151515"
								/>
							</g>
							<defs>
								<clipPath id="clip0_1_3934">
									<rect
										width={16}
										height={16}
										fill="white"
										transform="translate(4 4)"
									/>
								</clipPath>
							</defs>
						</svg>
						<div className="sc-text-4 sc-gap-3 flex flex-col">
							<p>
								Главное преимущество self-supervised learning – это огромное
								количество доступных данных.
							</p>
							<p>
								Нет необходимости в ручной разметке, что позволяет использовать
								миллиарды текстов для обучения мощных моделей вроде GPT. 
							</p>
						</div>
					</div>
					<div className="sc-p-3 sc-gap-3 flex w-1/2 flex-col justify-between border">
						<svg
							className="sc-w-[24px] sc-h-[24px]"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width={24} height={24} rx={12} fill="#151515" />
							<g clipPath="url(#clip0_1_3938)">
								<path
									d="M7.3335 11.332H16.6668V12.6654H7.3335V11.332Z"
									fill="white"
								/>
							</g>
							<defs>
								<clipPath id="clip0_1_3938">
									<rect
										width={16}
										height={16}
										fill="white"
										transform="translate(4 4)"
									/>
								</clipPath>
							</defs>
						</svg>
						<div className="sc-text-4 sc-gap-3 flex flex-col">
							<p>
								Но есть и нюанс: модель учится исключительно на закономерностях
								в данных. Если данные некачественные, ограниченные или содержат
								предвзятости (bias), то модель обязательно перенимает эти
								недостатки.
							</p>
							<p>
								<strong>
									Модель может легко усвоить нежелательные стереотипы, ошибки
									или предрассудки, которые присутствуют в огромном количестве
									реальных текстов, поскольку ей никто специально не показывает,
									что правильно, а что нет.
								</strong>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="sc-p-4 sc-text-4 bg-myblue sc-gap-4 flex flex-col rounded-lg border font-semibold text-[#151515]">
				<p>
					Именно поэтому сбор данных — это, пожалуй, самое важная составляющая
					процесса предобучения.
				</p>
				<p>
					Датасеты должны быть чистые, разнообразные, сбалансированные и
					тщательно отобранные.
				</p>
			</div>
			<div>
				<p>
					Обратите внимание, что в алгоритме выше мы используем{" "}
					<strong>данные без меток</strong>, то есть обыкновенные тексты, никем
					специально не размеченные. Модель просто учится предсказывать
					следующий токен, для этого ей не требуются человеческие метки. Такой
					подход называется {" "}
					<strong>self-supervised learning (самообучение).</strong>
				</p>
				<div className="sc-mt-3 sc-gap-2 flex">
					<div className="sc-p-3 flex w-1/2 flex-col justify-between border">
						<p className="sc-text-5 text-[#151515]">Откуда берутся данные?</p>

						<div className="sc-text-4 sc-gap-3 flex flex-col">
							<ol className="sc-pl-5 list-decimal">
								<li>
									Интернет (архив страниц интернета Common Crawl, новости,
									блоги, социальные сети, форумы)
								</li>
								<li>Книги и научные статьи</li>
								<li>Википедия</li>
								<li>
									Другое: код с GitHub, транскрипции видео и фильмов, тексты
									песен и т.д.
								</li>
							</ol>
						</div>
					</div>
					<div className="sc-p-3 sc-gap-8 flex w-1/2 flex-col justify-between border">
						<p className="sc-text-5 font-medium text-[#151515]">
							Как их обрабатывают?
						</p>
						<div className="sc-text-4 flex flex-col">
							<ol className="sc-pl-5 list-decimal">
								<li>
									Удаление дубликатов (данные обычно содержат множество
									повторяющихся фрагментов, а это чревато переобучением)
								</li>
								<li>
									Фильтрация нерелевантного и мусорного контента (реклама,
									ошибки кодировки, случайные наборы символов)
								</li>
								<li>
									Фильтрация по языку или теме. Для этого, а также для оценки
									грамотности, часто обучают специальные классификаторы.
								</li>
								<li>
									Фильтрация токсичных данных / оскорблений / неэтичного
									контента.
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
			<h3 className="sc-text-8 font-bold text-[#151515]">
				Почему чем больше данных – тем лучше?
			</h3>
			<div>
				<p>
					Обратите внимание, что в алгоритме выше мы используем{" "}
					<strong>данные без меток</strong>, то есть обыкновенные тексты, никем
					специально не размеченные. Модель просто учится предсказывать
					следующий токен, для этого ей не требуются человеческие метки. Такой
					подход называется {" "}
					<strong>self-supervised learning (самообучение).</strong>
				</p>
				<div className="sc-mt-3 sc-gap-2 flex">
					<div className="sc-p-3 sc-gap-3 sc-text-4 flex w-2/5 flex-col border">
						<p>
							Сегодня для нас совершенно ясно: чем больше данных видела языковая
							модель и чем в ней больше параметров, тем она умнее.
						</p>
						<p>
							Но до 2020 года это было совсем неочевидно, а гипотеза
							и масштабировании была лишь гипотезой.
						</p>
						<p>И вот почему</p>
					</div>
					<div className="sc-p-3 flex w-3/5 flex-col justify-between border">
						<p className="sc-text-5 text-[#151515]">Считалось, что:</p>

						<div className="sc-text-4 sc-gap-3 flex flex-col text-[#151515]">
							<p className="sc-gap-2 flex items-baseline font-medium">
								<BlackPoint />
								Большие модели быстро начнут переобучаться.
							</p>
							<div className="sc-gap-2 flex items-baseline font-medium">
								<div className="sc-w-[12px] sc-h-3 sc-border-4 rounded-full" />
								<p>
									После какого‑то размера перестанут эффективно обучаться
									и вообще не смогут улучшаться.
								</p>
							</div>
							<p className="sc-gap-2 flex items-baseline font-medium">
								<BlackPoint />
								позволили распараллеливать обучение (работают быстрее
								и эффективнее)
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="sc-gap-3 flex flex-col">
				<p>Но выяснилось, что LLM ведут себя совсем иначе:</p>
				<div>
					<ImageContainer
						fit="cover"
						src={"/images/image-57.png"}
						className="sc-w-[951px] sc-h-[312px] relative"
					/>
				</div>
				<p>
					Это картинка из статьи{" "}
					<strong>«Scaling Laws for Neural Language Models»</strong>
					2020 от учёных из OpenAI. Именно в ней впервые было доказано,
					что качество языковых моделей напрямую зависит от трёх факторов:
				</p>
				<div className="sc-text-4 sc-gap-3 flex flex-col text-[#151515]">
					<p className="sc-gap-2 flex items-baseline font-medium">
						<BlackPoint />
						Количества параметров (мощность модели)
					</p>
					<div className="sc-gap-2 flex items-baseline font-medium">
						<BlackPoint />
						<p>Количества данных (объём обучающих текстов)</p>
					</div>
					<p className="sc-gap-2 flex items-baseline font-medium">
						<BlackPoint />
						Вычислительных ресурсов (GPU/TPU часы)
					</p>
				</div>
			</div>
			<p>
				То есть оказалось, что, увеличивая данные и параметры модели, можно
				практически бесконечно улучшать качество, причём эти улучшения хорошо
				описываются простыми математическими закономерностями. Это называется{" "}
				<strong>Scaling Laws.</strong>
			</p>
			<div>
				<div className="sc-p-4 sc-text-4 bg-myblue sc-gap-4 flex flex-col rounded-lg border font-semibold text-[#151515]">
					<p>
						Получается, что даже гигантские модели (миллиарды и триллионы
						параметров) продолжают обучаться и улучшаться без серьёзного
						переобучения, и чем больше данных — тем дольше модель сохраняет
						способность учиться и улучшаться. Но есть и минусы:
					</p>
				</div>
				<div className="sc-text-4 flex">
					<div className="relative -z-1">
						<svg
							className="sc-w-[93px] sc-h-[412px] sc-left-2 sc-bottom-2 relative -z-1"
							viewBox="0 0 93 412"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M93 108L7 108C3.68629 108 1 105.314 1 102L0.999995 8.88109e-06"
								stroke="#151515"
								strokeWidth="2"
							/>
							<path
								d="M93 258L7 258C3.68629 258 1 255.314 1 252L0.999989 1.52588e-05"
								stroke="#151515"
								strokeWidth="2"
							/>
							<path
								d="M93 411L7 411C3.68629 411 1 408.314 1 405L0.999983 27"
								stroke="#151515"
								strokeWidth="2"
							/>
						</svg>
					</div>

					<div className="sc-gap-2 sc-mt-3 relative z-0 flex flex-col bg-white">
						<div className="sc-p-3 sc-gap-4 flex flex-col border">
							<p className="sc-py-3 sc-p-6 w-fit rounded-[48px] bg-black text-white">
								Данные ограничены
							</p>
							<p>
								Количество текста в мире
								кажется огромным, но на самом деле открытые качественные данные имеют предел. Можно
								использовать синтетику, но она менее эффективна.
							</p>
						</div>
						<div className="sc-p-3 sc-gap-4 flex flex-col border">
							<p className="sc-py-3 sc-p-6 w-fit rounded-[48px] bg-black text-white">
								Для обучения нужны огромные вычислительные ресурсы
							</p>
							<p>
								Современные гигантские модели, такие как GPT-4.5, требуют для
								обучения целых кластеров из тысяч GPU. Это стоит миллиарды
								долларов (а это приводит к монополии корпораций) и, кроме того,
								генерирует огромное количество выбросов вредных веществ в
								окружающую среду.
							</p>
						</div>
						<div className="sc-p-3 sc-gap-4 flex flex-col border">
							<p className="sc-py-3 sc-p-6 w-fit rounded-[48px] bg-black text-white">
								Чем больше модель — тем сложнее ей пользоваться
							</p>
							<p>
								Гигантские модели требуют огромного количества памяти и
								мощностей даже на этапе инференса. Это усложняет их практическое
								применение и часто делает их недоступными для простого
								потребителя.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="sc-p-4 sc-text-4 sc-gap-4 flex flex-col rounded-lg border font-semibold text-[#151515]">
				<p>
					На данный момент мы так и не научились решать эти проблемы. Поэтому —
					все впереди.
				</p>
				<p>
					Кроме того, предобучение — это ещё не все. В обучении моделей
					присутствуют и другие этапы. О них поговорим в следующих главах.
				</p>
			</div>
		</div>
	)
}

export default PreTraining
