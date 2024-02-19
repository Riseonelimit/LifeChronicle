import { Link } from 'react-router-dom'

const LoginRedirect = ({children,to,redirectText}) => {
  return (
    <h1>{children}<Link to={to} className=" font-[600] text-orange-400 hover:underline">{redirectText}</Link></h1>
  )
}

export default LoginRedirect