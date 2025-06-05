import Image from "next/image"
type Props = {
	src: string
	className?: string
}

const ImageContainer = ({ src, className = "" }: Props) => {
	return (
		<div className={className}>
			<Image
				src={src}
				alt="1"
				fill
				objectFit="cover"
				className="sc-border relative overflow-hidden rounded-[8px] border-[#151515] shadow-[2px_2px_0px_0px_#151515]"
			/>
		</div>
	)
}

export default ImageContainer
