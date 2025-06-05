type Props = {
	children: string
}

const SubTitle = ({ children }: Props) => {
	return <h2 className="sc-text-[36px] font-bounded font-black">{children}</h2>
}

export default SubTitle
