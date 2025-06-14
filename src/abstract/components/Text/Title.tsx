type Props = {
	children: React.ReactNode
	className?: string
	id: string
}

const Text = ({ children, className, id }: Props) => {
	return (
		<h1
			className={
				"font-bounded sc-text-[48px] font-black text-[#151515] " + className
			}
			id={id}
		>
			{children}
		</h1>
	)
}

export default Text
