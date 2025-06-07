import Image from "next/image"
type Props = {
	src: string
	className?: string
	fit?: "cover" | "contain"
}

const ImageContainer = ({ src, className, fit = "contain" }: Props) => {
	return (
		<div className={className}>
			<Image
				src={src}
				alt="1"
				fill
				objectFit={fit}
				className="sc-border relative -z-1 overflow-hidden rounded-[8px] border-[#151515] bg-white shadow-[2px_2px_0px_0px_#151515]"
			/>
		</div>
	)
}

export default ImageContainer
