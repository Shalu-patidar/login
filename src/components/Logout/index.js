// Write your code here
import './index.css'

const Logout = props => {
  const {logout} = props
  return (
    <button className="login-btn" type="button" onClick={logout}>
      Logout
    </button>
  )
}
export default Logout
