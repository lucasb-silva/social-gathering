import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Lets Gather.</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in tempor massa. 
          Aenean efficitur orci ac tincidunt volutpat. Integer ac ex sodales,
          tempus ex ac, tempor purus.
          </p>
          <span>Don't you have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login