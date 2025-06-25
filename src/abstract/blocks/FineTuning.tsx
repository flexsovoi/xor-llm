import ImageContainer from "../components/ImageContainer/ImageContainer"
import InfoBox from "../components/InfoBox/InfoBox"
import { NumberPoint } from "../components/NumberPoint/NumberPoint"
import Title from "../components/Text/Title"

const FineTuning = () => {
	return (
		<div className="sc-text-5 sc-gap-6 flex flex-col text-[#464646]">
			<Title id="finetuning">Файн-тюнинг</Title>

			<div className="sc-gap-6 flex">
				<div>
					<ImageContainer
						fit="cover"
						src={"/images/image-58.png"}
						className="sc-w-[448px] sc-h-[560px] relative"
					/>
				</div>
				<div className="sc-gap-4 flex flex-col">
					<p>
						На этапе предобучения модель уже узнала много полезного: она изучила
						язык, разобралась в закономерностях текстов и может довольно
						слаженно разговаривать.
					</p>
					<p>
						Однако надо понимать, что пока что ей просто скормили много текста.
						Её не обучали следовать инструкциям, решать задачи или вести себя
						определённым образом.
					</p>
					<p>
						Чтобы модель стала действительно полезной для пользователя, её нужно
						дополнительно «донастроить». Именно этот этап и
						называется файнтюнингом (fine-tuning).
					</p>
					<p>
						Файнтюнинг — это процесс, когда мы берём уже предобученную модель и
						дополнительно обучаем её на гораздо меньшем, но специализированном
						наборе данных с конкретными примерами решений нужных задач. В этой
						главе разбираемся, как именно это работает.
					</p>
				</div>
			</div>
			<p className="sc-p-4 sc-text-4 bg-myblue rounded-lg border font-semibold text-[#151515]">
				Технически, файнтюнинг – это когда мы берем готовую модель с ее
				обученными параметрами и немного подкручиваем некоторые из них.
			</p>
			<div className="m-auto flex flex-col items-center text-[#151515]">
				<p>Файнтюнинг используется</p>

				<div>
					<svg
						className="sc-w-[521px] sc-h-[52px]"
						width={521}
						height={52}
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
				</div>
				<div className="sc-gap-[70px] sc-text-4 flex">
					<div className="sc-gap-3 flex flex-col">
						<p className="sc-py-3 sc-p-6 rounded-[48px] bg-black text-center text-white">
							Самими производителями моделей
						</p>
						<div className="sc-gap-3 sc-text-4 flex flex-col font-semibold">
							<p>
								Для того, чтобы улучшить качество и полезность своих моделей
								в конкретных сценариях.
							</p>
							<p>
								Например, с помощью файнтюнинга модели учат лучше решать задачи
								по программированию или математике.
							</p>
							<p>
								Также файнтюнинг используется для элаймента, то есть для того,
								чтобы сделать модель более безопасной и снизить количество
								нежелательных ответов.
							</p>
						</div>
					</div>
					<div className="sc-gap-3 flex flex-col">
						<p className="sc-py-3 sc-p-6 rounded-[48px] bg-black text-center text-white">
							Сторонними разработчиками и исследователями
						</p>
						<div className="sc-gap-3 sc-text-4 flex flex-col font-semibold">
							<p>
								Для того, чтобы улучшить качество и полезность своих моделей
								в конкретных сценариях.
							</p>
							<p>
								Например, с помощью файнтюнинга модели учат лучше решать задачи
								по программированию или математике.
							</p>
							<p>
								Также файнтюнинг используется для элаймента, то есть для того,
								чтобы сделать модель более безопасной и снизить количество
								нежелательных ответов.
							</p>
						</div>
					</div>
				</div>
			</div>
			<h3 className="sc-text-8 font-bold text-[#151515]">
				Файнтюнинг бывает двух видов:
			</h3>
			<div className="sc-gap-2 flex flex-col">
				<div className="sc-gap-3 flex items-center text-[#151515]">
					<NumberPoint>1</NumberPoint>
					<span>Unsupervised fine-tuning</span>
				</div>
				<p>
					Это дообучение модели 
					<strong>без использования размеченных данных</strong>, на текстах,
					которые модель должна понять или с которыми должна адаптироваться
					работать.
				</p>
				<p>
					Например, если в претрейне у модели было мало текстов по математике,
					то на этапе файнтюнинга можно просто дообучить ее на математических
					учебниках, и понимание предмета уже немного улучшится.
				</p>
			</div>
			<p className="sc-p-4 sc-text-4 bg-myblue rounded-lg border font-semibold text-[#151515]">
				Такой вид файнтюнинга используется в условиях нехватки размеченных
				данных, ну или когда ее просто нужно адаптировать под новый домен
				знаний. Например, так можно дообучить на внутренней документации
				компании.
			</p>
			<div className="sc-gap-12 flex">
				<div className="sc-gap-2 flex flex-col">
					<div className="sc-gap-3 flex items-center text-[#151515]">
						<NumberPoint>2</NumberPoint>
						<span>Supervised fine-tuning</span>
					</div>
					<p>
						Это уже более распространённый вид настройки. Здесь дообучение
						модели происходит <strong>на размеченных данных</strong>, в которых
						явно указаны входные данные и желаемый выходной результат (метки,
						ответы, классы и тд).
					</p>
					<p>
						Сложность подготовки данных здесь выше, потому что в датасете
						уже не сырой текст, а обработанные людьми{" "}
						<strong>пары вида input-output.</strong>
					</p>
					<p>
						С помощью SFT можно научить модель с высокой точностью решать
						конкретные задачи и следовать инструкциям, и именно SFT чаще всего
						используют после этапа предобучения.
					</p>
				</div>
				<div>
					<ImageContainer
						fit="cover"
						src={"/images/image-59.png"}
						className="sc-w-[510px] sc-h-[440px] relative"
					/>
				</div>
			</div>
			<p className="sc-text-4 font-semibold text-[#151515]">
				Техники файнтюнинга, в свою очередь, тоже могут быть разные. Вот две
				основные:
			</p>
			<div className="sc-gap-3 flex">
				<div className="sc-gap-3 flex flex-col">
					<InfoBox arrowPosition="right" arrowOffset="89px">
						<p className="sc-p-4">
							Это полный файн-тюнинг, то есть полноценная донастройка весов
							предобученной модели под новые данные. Метод проверенный
							и используется очень давно, но стоит такой файнтюнинг очень
							дорого.
						</p>
					</InfoBox>
					<InfoBox arrowPosition="right" arrowOffset="89px">
						<div className="sc-p-4 sc-gap-4 flex flex-col">
							<p>
								Это LoRA (Low-Rank Adaptation). Основная идея метода заключается
								в том, чтобы разложить весовые матрицы (некоторые или все)
								исходной модели на матрицы низкого ранга и обучать уже их.
								По сравнению с полноценным FT LoRA экономичнее, требует меньше
								данных и быстрее сходится.
							</p>
							<p>
								Сейчас LoRA и её варианты (QLoRA, gLoRA и тд) – это основной
								стандарт индустрии, особенно в условиях ограниченных ресурсов.
							</p>
						</div>
					</InfoBox>
				</div>
				<div>
					<ImageContainer
						src={"/images/image-60.png"}
						className="sc-w-[443px] relative h-full"
					/>
				</div>
			</div>
			<p>
				В отличие от предобучения, для которого нужны огромные вычислительные
				ресурсы и миллиарды токенов данных, файнтюнинг вполне реально провернуть
				дома или в облаке за разумные деньги, если выбрать не слишком большую
				модель. Именно поэтому файнтюнинг так популярен среди разработчиков и
				open-source энтузиастов.
			</p>
			<p>
				Учитывая это, в этой главе мы не будем останавливаться на теории, а
				подробно разберём, как самостоятельно зафайнтюнить модель под свою
				задачу, используя понятные и доступные инструменты.
			</p>
			<p className="sc-text-4 font-semibold text-[#151515]">
				Итак, пошаговый гайд по тому, как зафайнтюнить модель:
			</p>
			<div className="sc-gap-12 flex">
				<div className="sc-gap-2 flex flex-col">
					<div className="sc-gap-3 flex items-center text-[#151515]">
						<NumberPoint>1</NumberPoint>
						<span>Определяем задачу и собираем данные</span>
					</div>
					<p>
						На этом этапе определяем, какую именно задачу должна решать наша
						модель, и собираем релевантные размеченные данные в формате
						вопрос-ответ. Можно разметить все самостоятельно или найти датасет в
						открытых источниках (например,{" "}
						<strong>https://huggingface.co/datasets</strong> – это библиотека из
						380к наборов данных на любой вкус).
					</p>
					<strong>Вот пример подходящего датасета</strong>
				</div>
				<div>
					<ImageContainer
						fit="cover"
						src={"/images/image-61.png"}
						className="sc-w-[470px] sc-h-[276px] relative"
					/>
				</div>
			</div>
			<div className="sc-gap-[86px] flex">
				<div>
					<ImageContainer
						fit="cover"
						src={"/images/image-62.png"}
						className="sc-w-[400px] sc-h-[218px] relative"
					/>
				</div>
				<div className="sc-gap-2 flex flex-col">
					<div className="sc-gap-3 flex items-center text-[#151515]">
						<NumberPoint>2</NumberPoint>
						<span>Выбираем предобученную модель</span>
					</div>
					<p>Для этого заходим на</p>
					<p>
						<strong>https://huggingface.co/models</strong> и выбираем модель,
						которая подойдет под ваши GPU-ресурсы. Для файнтюна в домашних
						условиях лучше брать небольшую модель, до 8 миллиардов параметров.
					</p>
				</div>
			</div>
			<div className="sc-gap-2 flex flex-col">
				<div className="sc-gap-3 flex items-center text-[#151515]">
					<NumberPoint>3</NumberPoint>
					<span>Готовим окружение</span>
				</div>
				<p>
					На этом шаге просто убедитесь, что у вас есть доступ к GPU (например,
					можете работать в Google Colab).
				</p>
			</div>
			<div className="sc-gap-2 flex flex-col">
				<div className="sc-gap-3 flex items-center text-[#151515]">
					<NumberPoint>4</NumberPoint>
					<span>Загружаем модель и токенизатор</span>
				</div>
				<p>
					На этом шаге мы наконец-то мы добрались до кода. Вот скрипт, который
					подготавливает модель к дообучению:
				</p>
				<div className="relative">
					<div className="sc-p-[10px] font-firacode sc-gap-5 sc-text-[14px] bg-codeBg flex w-full overflow-hidden rounded-lg">
						{/* Нумерация строк */}
						<div className="text-codeGray w-fit pr-4 text-right font-[450]">
							{Array.from({ length: 12 }, (_, i) => (
								<p key={i}>{i + 1}</p>
							))}
						</div>

						{/* Код */}
						<div className="text-codeWhite whitespace-pre">
							<p>
								<span className="text-codeRed">from</span> transformers{" "}
								<span className="text-codeRed">import</span> AutoTokenizer,
								AutoModelForCausalLM, BitsAndBytesConfig
							</p>
							<br />
							<p>
								bnb_config = BitsAndBytesConfig(
								<span className="text-codeOrange">load_in_4bit=True</span>,
							</p>
							<p className="sc-pl-8">bnb_4bit_use_double_quant=True,</p>
							<p className="sc-pl-8">bnb_4bit_compute_dtype=torch.bfloat16)</p>
							<br />
							<p>model = AutoModelForCausalLM.from_pretrained(</p>
							<p className="sc-pl-8">
								<span className="text-codeBlue">
									&quot;mistralai/Mistral-7B-v0.1&quot;
								</span>
								,
							</p>
							<p className="sc-pl-8">quantization_config=bnb_config,</p>
							<p className="sc-pl-8">
								device_map=
								<span className="text-codeBlue">&quot;auto&quot;</span>)
							</p>
							<p></p>
							<p>
								tokenizer = AutoTokenizer.from_pretrained(
								<span className="text-codeBlue">
									&quot;mistralai/Mistral-7B-v0.1&quot;
								</span>
								)
							</p>
							<p>tokenizer.pad_token = tokenizer.eos_token</p>
						</div>
					</div>
					<div className="sc-gap-2 sc-top-10 sc-right-9 absolute flex flex-col items-end">
						<p className="sc-p-2 sc-w-[337px] sc-text-4 sc-mr-[60px] border bg-white">
							# Чтобы сэкономить VRAM, модель будем грузить в 4-bit формате
						</p>
						<p className="sc-p-2 sc-w-[195px] sc-text-4 border bg-white">
							# Грузим модель, автоматически раскидывая слои по GPU
						</p>
						<p className="sc-p-2 sc-w-[437px] sc-text-4 sc-mr-10 sc-mt-2 border bg-white">
							# Загружаем соответствующий модели токенизатор и добавляем
							так называемый pad_token: он нужен для корректной обработки батчей
						</p>
					</div>
				</div>
			</div>
			<div className="sc-gap-2 sc-mt-[100px] flex flex-col">
				<div className="sc-gap-3 flex items-center text-[#151515]">
					<NumberPoint>5</NumberPoint>
					<span>Займемся данными</span>
				</div>
				<p>Их нужно загрузить и предобработать:</p>
				<div className="relative">
					<div className="w-full overflow-hidden rounded-lg">
						<div className="sc-p-[10px] font-firacode sc-gap-5 sc-text-[14px] bg-codeBg flex w-full overflow-hidden rounded-lg">
							<div className="text-codeGray w-fit pr-4 text-right font-[450]">
								{Array.from({ length: 10 }, (_, i) => (
									<p key={i}>{i + 1}</p>
								))}
							</div>
							<div className="text-codeWhite whitespace-pre">
								<p>
									<span className="text-codeRed">from</span> datasets{" "}
									<span className="text-codeRed">import</span> load_dataset
								</p>
								<br />
								<p>
									dataset = load_dataset(
									<span className="text-codeBlue">&quot;json&quot;</span>,
									data_files=
									<span className="text-codeBlue">&quot;train.json&quot;</span>,
									split=
									<span className="text-codeBlue">&quot;train&quot;</span>)
								</p>
								<br />
								<p>
									<span className="text-codeRed">def</span> format(example):
								</p>
								<p className="sc-pl-8">
									<span className="text-codeRed">return</span> &#123;
								</p>
								<p className="sc-pl-12">
									<span className="text-codeBlue">&quot;text&quot;</span>: f
									<span className="text-codeBlue">
										&quot;&lt;s&gt;[INST]
										&#123;example[&apos;instruction&apos;]&#125; [/INST]
										&#123;example[&apos;output&apos;]&#125;&lt;/s&gt;&quot;
									</span>
								</p>
								<p className="sc-pl-8">&#125;</p>
								<br />
								<p>dataset = dataset.map(format)</p>
							</div>
						</div>
					</div>
					<div className="sc-gap-1 -sc-top-10 sc-right-9 absolute flex flex-col items-end">
						<p className="sc-p-2 sc-w-[435px] sc-text-4 sc-mr-[60px] border bg-white">
							{`# Грузим локальные данные. Здесь они в формате json вида {"instruction": "...", "output": "..."}.`}
						</p>
						<div className="sc-p-2 sc-w-[590px] sc-text-4 sc-mt-[130px] border bg-white">
							<p>{`# Данные форматируем под модель. В данном случае нужно обернуть каждый пример в специальные токены `}</p>{" "}
							<p>{`[INST] ... [/INST]. Это важно для обучения модели правильно понимать промпт-ответ.`}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="sc-gap-2 sc-mt-[100px] flex flex-col">
				<div className="sc-gap-3 flex items-center text-[#151515]">
					<NumberPoint>6</NumberPoint>
					<span>Теперь приготовим сам файнтюн</span>
				</div>
				<p>
					Файнтюнить модель будем методом LoRA. Для этого мы внедряем маленькие
					обучаемые адаптеры в определённые слои модели, а остальные веса
					замораживаем. Вот скрипт, который настраивает такой адаптер:
				</p>
				<div className="relative">
					<div className="w-full overflow-hidden rounded-lg">
						<div className="sc-p-[10px] font-firacode sc-gap-5 sc-text-[14px] bg-codeBg flex w-full overflow-hidden rounded-lg">
							<div className="text-codeGray w-fit pr-4 text-right font-[450]">
								{Array.from({ length: 12 }, (_, i) => (
									<p key={i}>{i + 1}</p>
								))}
							</div>
							<div className="text-codeWhite whitespace-pre">
								<p>
									<span className="text-codeRed">from</span> peft{" "}
									<span className="text-codeRed">import</span> LoraConfig,
									get_peft_model, TaskType
								</p>
								<br />
								<p>
									lora_config = LoraConfig(r=
									<span className="text-codeOrange">64</span>,
								</p>
								<p className="sc-pl-8">
									lora_alpha=<span className="text-codeOrange">16</span>,
								</p>
								<p className="sc-pl-8">
									target_modules=[
									<span className="text-codeBlue">
										&quot;q_proj&quot;
									</span>,{" "}
									<span className="text-codeBlue">&quot;v_proj&quot;</span>],
								</p>
								<p className="sc-pl-8">
									lora_dropout=<span className="text-codeOrange">0.05</span>,
								</p>
								<p className="sc-pl-8">
									bias=<span className="text-codeBlue">&quot;none&quot;</span>,
								</p>
								<p className="sc-pl-8">task_type=TaskType.CAUSAL_LM)</p>
								<br />
								<p>model = get_peft_model(model, lora_config)</p>
								<p>model.print_trainable_parameters()</p>
							</div>
						</div>
					</div>
					<div className="sc-gap-1 -sc-top-7 sc-right-9 absolute flex w-full flex-col items-end">
						<p className="sc-p-2 sc-w-[372px] sc-text-4 border bg-white">
							{`# r — это главный параметр, определяющий размер встраиваемого адаптера. LoRA заменяет обучение большой матрицы весов на обучение двух маленьких матриц A (d × r) и B (r × d), где d — размер слоя.`}
						</p>
						<div className="sc-p-2 sc-w-[456px] sc-text-4 sc-mr-6 border bg-white">
							<p>{`# target_modules — это список слоёв модели, в которые будут внедрены LoRA-адаптеры. В данном случае выбираем Query и Value проекции`}</p>
						</div>{" "}
						<div className="sc-p-2 sc-w-[368px] sc-text-4 sc-ml-10 sc-mt-9 self-start border bg-white">
							<p>{`# Этой командой можно посмотреть, сколько параметров в итоге будем обучать`}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="sc-gap-2 sc-mt-[100px] flex flex-col">
				<div className="sc-gap-3 flex items-center text-[#151515]">
					<NumberPoint>7</NumberPoint>
					<span>Обучаем!</span>
				</div>
				<p>
					Мы подготовили данные, адаптер LoRA и предобученную модель. Теперь
					настало время все объединить
				</p>
				<div className="relative">
					<div className="w-full overflow-hidden rounded-lg">
						<div className="sc-p-[10px] font-firacode sc-gap-5 sc-text-[14px] bg-codeBg flex w-full overflow-hidden rounded-lg">
							<div className="text-codeGray w-fit pr-4 text-right font-[450]">
								{Array.from({ length: 24 }, (_, i) => (
									<p key={i}>{i + 1}</p>
								))}
							</div>
							<div className="text-codeWhite whitespace-pre">
								<p>
									<span className="text-codeRed">from</span> transformers{" "}
									<span className="text-codeRed">import</span> TrainingArguments
								</p>
								<br />
								<p>training_args = TrainingArguments(</p>
								<p className="sc-pl-8">
									output_dir=
									<span className="text-codeBlue">
										&quot;./mistral_lora&quot;
									</span>
									,
								</p>
								<p className="sc-pl-8">
									per_device_train_batch_size=
									<span className="text-codeOrange">2</span>,
								</p>
								<p className="sc-pl-8">
									gradient_accumulation_steps=
									<span className="text-codeOrange">8</span>,
								</p>
								<p className="sc-pl-8">
									logging_steps=<span className="text-codeOrange">10</span>,
								</p>
								<p className="sc-pl-8">
									save_steps=<span className="text-codeOrange">100</span>,
								</p>
								<p className="sc-pl-8">
									num_train_epochs=<span className="text-codeOrange">3</span>,
								</p>
								<p className="sc-pl-8">
									fp16=<span className="text-codeOrange">True</span>,
								</p>
								<p className="sc-pl-8">
									save_total_limit=<span className="text-codeOrange">2</span>,
								</p>
								<p className="sc-pl-8">
									report_to=
									<span className="text-codeBlue">&quot;none&quot;</span>
								</p>
								<p>)</p>
								<br />
								<p>
									<span className="text-codeRed">from</span> transformers{" "}
									<span className="text-codeRed">import</span> Trainer,
									DataCollatorForLanguageModeling
								</p>
								<br />
								<p>trainer = Trainer(</p>
								<p className="sc-pl-8">model=model,</p>
								<p className="sc-pl-8">train_dataset=tokenized,</p>
								<p className="sc-pl-8">args=training_args,</p>
								<p className="sc-pl-8">
									data_collator=DataCollatorForLanguageModeling(tokenizer, mlm=
									<span className="text-codeOrange">False</span>),
								</p>
								<p>)</p>
								<br />
								<p>trainer.train()</p>
							</div>
						</div>
					</div>
					<div className="sc-gap-1 -sc-top-7 sc-right-9 absolute flex w-full flex-col items-end">
						<p className="sc-p-2 sc-w-[403px] sc-text-4 border bg-white">
							{`# Обозначаем параметры обучения: сколько будет эпох, какой будет размер батча, куда загружать обученную модель и так далее.`}
						</p>
						<div className="sc-p-2 sc-w-[553px] sc-text-4 sc-mt-[260px] border bg-white">
							<p>{`# Запускаем обучения с нашим датасетом, параметрами обучения и предобученной моделью с адаптером`}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="sc-gap-2 sc-mt-8 flex flex-col">
				<div className="sc-gap-3 flex items-center text-[#151515]">
					<NumberPoint>8</NumberPoint>
					<span>Осталось протестировать, что у нас вышло</span>
				</div>

				<div className="relative">
					<div className="w-full overflow-hidden rounded-lg">
						<div className="sc-p-[10px] font-firacode sc-gap-5 sc-text-[14px] bg-codeBg flex w-full overflow-hidden rounded-lg">
							<div className="text-codeGray w-fit pr-4 text-right font-[450]">
								{Array.from({ length: 14 }, (_, i) => (
									<p key={i}>{i + 1}</p>
								))}
							</div>
							<div className="text-codeWhite whitespace-pre">
								<p>
									<span className="text-codeRed">from</span> transformers{" "}
									<span className="text-codeRed">import</span> pipeline
								</p>
								<p>
									<span className="text-codeRed">from</span> peft{" "}
									<span className="text-codeRed">import</span> PeftModel
								</p>
								<br />
								<p>base_model = AutoModelForCausalLM.from_pretrained(</p>
								<p className="sc-pl-8">
									<span className="text-codeBlue">
										&quot;mistralai/Mistral-7B-v0.1&quot;
									</span>
									,
								</p>
								<p className="sc-pl-8">quantization_config=bnb_config,</p>
								<p className="sc-pl-8">
									device_map=
									<span className="text-codeBlue">&quot;auto&quot;</span>
								</p>
								<p>)</p>
								<br />
								<p>
									model = PeftModel.from_pretrained(base_model,{" "}
									<span className="text-codeBlue">
										&quot;mistral_lora_finitude&quot;
									</span>
									)
								</p>
								<br />
								<p>
									pipe = pipeline(
									<span className="text-codeBlue">
										&quot;text-generation&quot;
									</span>
									, model=model, tokenizer=tokenizer)
								</p>
								<br />
								<p>
									pipe(
									<span className="text-codeBlue">
										&quot;[INST] Как работает LoRA? [/INST]&quot;
									</span>
									, max_new_tokens=<span className="text-codeOrange">100</span>
									)[<span className="text-codeOrange">0</span>][
									<span className="text-codeBlue">
										&quot;generated_text&quot;
									</span>
									]
								</p>
							</div>
						</div>
					</div>
					<div className="sc-gap-1 -sc-top-7 sc-right-1 absolute flex w-full flex-col items-end">
						<p className="sc-p-2 sc-w-[403px] sc-text-4 sc-mr-[100px] border bg-white">
							{`# Грузим базовую модель в том же виде, что и раньше (это важно).`}
						</p>
						<div className="sc-p-2 sc-w-[243px] sc-text-4 sc-mt-[57px] border bg-white">
							<p>{`# Все, можно пользоваться. Например, на выходе этой строки мы получим что‑то вроде «LoRA добавляет обучаемые адаптеры слоям».`}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="sc-p-4 sc-text-4 sc-gap-3 bg-myblue flex flex-col rounded-lg border font-semibold text-[#151515]">
				<p>
					Полноценный ноутбук со всем кодом, который мы только что показали,
					можно найти здесь
				</p>

				<a href="https://colab.research.google.com/github/brevdev/notebooks/blob/main/mistral-finetune-own-data.ipynb.">
					https://colab.research.google.com/github/brevdev/notebooks/blob/main/mistral-finetune-own-data.ipynb.
				</a>
			</div>
			<p>
				В целом <strong>этот пайплайн — универсальный</strong>, потому что его
				можно адаптировать под любую LLM, любой набор данных и даже разные
				задачи (чат-боты, инструкции, классификация). 
			</p>
			<p>
				Однако файнтюнинг — не единственный способ донастройки моделей. В
				последнее время всё большее внимание получают подходы, основанные на{" "}
				<strong>обучении с подкреплением (reinforcement learning, RL).</strong>{" "}
				О том, как они работают и почему стали настолько популярными – в
				следующей главе.
			</p>
		</div>
	)
}

export default FineTuning
