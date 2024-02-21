
const Label = ({children,className}) => {
  return (
    <h1 className={` text-lg font-[500] ${className}`}>{children}</h1>
    )
}

export default Label