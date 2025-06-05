type Props = {
	children: string
	className?: string
}

const Text = ({ children, className = "" }: Props) => {
	return (
		<h1 className={"font-bounded sc-text-[48px] font-black " + className}>
			{children}
		</h1>
	)
}

export default Text
