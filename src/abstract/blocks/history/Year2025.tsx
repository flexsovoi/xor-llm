import DashedBorderBox from "@/abstract/components/DashedBorderBox/DashedBorderBox"
import SubTitle from "@/abstract/components/SubTitle/SubTitle"
import VerticalDashedLine from "@/abstract/components/VerticalDashedLine/VerticalDashedLine"
import Image from "next/image"

const Year2025 = () => {
	return (
		<div className="flex items-center">
			<div className="flex flex-col">
				<DashedBorderBox
					viewBox="0 0 248 133"
					className='"sc-p-5 sc-w-[248px] sc-h-[133px]'
				>
					<div className="sc-p-5 sc-w-[250px]">
						<SubTitle>2025</SubTitle>
						<p className="font-onest sc-text-4 text-[#525252]">
							Вы находитесь здесь
						</p>
					</div>
				</DashedBorderBox>
				<VerticalDashedLine
					height={384}
					className="sc-h-[384px] sc-ml-[42px] sc-my-2"
				/>
			</div>
			<div className="flex flex-col">
				<div className="sc-w-[589px] sc-h-[136px] relative">
					<Image src={"/images/image-10.png"} alt="1" fill objectFit="cover" />
				</div>

				<svg
					className="sc-h-[179px] sc-w-[516px] sc-right-[200px] -sc-top-[30px] relative"
					width={516}
					height={179}
					viewBox="0 0 516 179"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M7.42105 50C7.42105 46.1817 4.14749 43 1.74845e-07 43L0 41C4.14749 41 7.42105 37.8183 7.42105 34L9.42105 34C9.42105 36.8456 8.04902 39.358 5.92119 41L20 41V43L5.92119 43C8.04902 44.642 9.42105 47.1544 9.42105 50H7.42105Z"
						fill="#C8C8C8"
					/>
					<path
						d="M484.5 1C509.103 8.42955 513.21 36.2024 514.709 76.6779C515.014 84.9071 514.807 92.5632 510.272 99.6175C507.747 103.546 506.985 109.17 504.754 113.468C501.578 119.585 496.75 127.099 491.878 131.971C472.414 151.434 447.74 162.16 420.245 162.16C408.627 162.16 399.096 161.368 389.299 154.369C383.107 149.947 377.596 144.35 374.475 137.327C373.135 134.314 372.668 128.383 376.963 127.156C382.086 125.692 385.356 130.404 387.135 134.406C389.238 139.137 392.004 142.546 392.004 147.607C392.004 155.221 390.756 159.945 385.62 165.082C377.74 172.962 366.501 173.672 355.755 175.037C341.6 176.834 326.325 178.418 312.148 176.011C304.925 174.784 297.315 172.703 290.507 169.951C284.556 167.545 279.249 162.401 274.168 158.481C265.925 152.122 258.258 142.918 252.365 134.406C246.293 125.636 245.317 112.859 237.595 105.136C228.054 95.5951 220.281 87.0655 207.946 80.8979C196.533 75.1911 185.788 71.5922 172.888 71.5922C162.12 71.5922 157.278 78.0647 150.976 85.7672C149.454 87.6274 144.433 100.399 149.082 101.727C154.314 103.222 159.254 99.9587 159.254 94.4777C159.254 86.2527 156.748 80.9853 148.92 77.9223C136.497 73.061 123.622 70.3246 110.561 74.5138C103.479 76.7853 94.6509 78.4092 87.1888 78.4092C78.6478 78.4092 72.9509 76.9641 68.6857 68.6707C66.5779 64.5723 63.6334 55.8357 65.9805 51.1414C67.6051 47.8923 74.5207 44.3099 72.0941 39.9421C69.5812 35.4189 64.1086 34.3553 59.4341 33.1252C56.7567 32.4206 49 31.5 46.5 33.1252C44.9741 34.3968 42.4622 35.5515 40.6593 37.0686C38.3601 39.0032 38.6936 42.2835 35.6897 42.2119C33.0371 42.1486 28.4036 42 20.5 42"
						stroke="#C8C8C8"
						strokeWidth={2}
						strokeLinecap="round"
						strokeDasharray="7 7"
					/>
				</svg>
			</div>
		</div>
	)
}

export default Year2025
