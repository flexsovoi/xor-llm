"use client"

import { useState } from "react"

const toc = [
	{ number: "0", title: "История LLM", id: "history-llm", children: [] },
	{
		number: "1",
		title: "Математика нейросетей",
		id: "math-nn",
		children: [
			{ number: "1.1", title: "Линейная алгебра", id: "linear-algebra" },
			{ number: "1.2", title: "Математический анализ", id: "calculus" },
		],
	},
	{ number: "2", title: "Механизм внимания", id: "attention" },
	{ number: "3", title: "Трансформеры", id: "transformers" },
	{ number: "4", title: "Предобучение", id: "pretraining" },
	{ number: "5", title: "Файнтюнинг", id: "finetuning" },
	{
		number: "6",
		title: "Обучение с подкреплением и ризонинг",
		id: "rl-reasoning",
	},
]

export default function TableOfContents() {
	const [activeId, setActiveId] = useState<string>("history-llm")
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const scrollToSection = (id: string) => {
		const el = document.getElementById(id)
		const abstractEl = document.getElementById("abstract")
		if (!abstractEl || !el) return
		if (el) {
			const offset = abstractEl.getBoundingClientRect().width < 1024 ? 350 : 0
			const y = el.getBoundingClientRect().top + window.pageYOffset - offset
			console.log(offset)
			window.scrollTo({ top: y, behavior: "smooth" })
			setActiveId(id)
			setIsOpen(false)
		}
	}

	const isActive = (id: string) => id === activeId

	return (
		<aside
			className={`sticky top-0 z-11 h-fit w-full border border-[#D3D3D3] bg-white p-4 text-sm lg:top-6 lg:mt-6 lg:ml-6 lg:w-[245px]`}
		>
			{/* Header with toggle on mobile */}
			<div
				className="flex w-full cursor-pointer items-center justify-between lg:cursor-default lg:justify-start"
				onClick={() => setIsOpen((prev) => !prev)}
			>
				<h2 className="text-base font-bold">Содержание</h2>
				<span className="lg:hidden">{isOpen ? "▲" : "▼"}</span>
			</div>

			{/* TOC list: always open on lg, toggle on mobile */}
			<ol className={`mt-4 space-y-3 ${isOpen ? "block" : "hidden"} lg:block`}>
				{toc.map((item) => (
					<li key={item.number}>
						<div
							onClick={() => scrollToSection(item.id)}
							className={`group flex w-full cursor-pointer items-center gap-1 transition-all ${
								isActive(item.id)
									? "font-bold text-black"
									: "text-gray-500 hover:text-black active:text-black"
							}`}
						>
							<span
								className={`flex h-4 w-4 items-center justify-center rounded-full border text-xs transition-all ${
									isActive(item.id)
										? "border-black bg-black text-white"
										: "border-[#D3D3D3] group-hover:border-black group-active:border-black group-active:text-black"
								}`}
							>
								{item.number}
							</span>
							<span>{item.title}</span>
						</div>

						{item.children && item.children.length > 0 && (
							<ol className="mt-2 ml-4 space-y-2 border-l border-[#D3D3D3] pl-2">
								{item.children.map((sub) => (
									<li
										key={sub.number}
										onClick={() => scrollToSection(sub.id)}
										className={`group flex cursor-pointer items-center gap-2 transition-all ${
											isActive(sub.id)
												? "font-bold text-black"
												: "text-gray-500 hover:text-black active:text-black"
										}`}
									>
										<span
											className={`rounded-full border px-1 text-center text-xs transition-all ${
												isActive(sub.id)
													? "border-black bg-black text-white"
													: "border-[#D3D3D3] group-hover:border-black group-active:bg-[#E9E9E9] group-active:text-[#8E8E8E]"
											}`}
										>
											{sub.number}
										</span>
										<span className="group-active:text-[#8E8E8E]">
											{sub.title}
										</span>
									</li>
								))}
							</ol>
						)}
					</li>
				))}
			</ol>
		</aside>
	)
}
