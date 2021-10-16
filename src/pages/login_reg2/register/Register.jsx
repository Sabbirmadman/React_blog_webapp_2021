import "./register.css";
import register_img from "./../../../images/regs.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="test">
      <div className="testContainer">
        <div className="testSignInContainer">
          <div className="signInImageHolder">
            <img src={register_img} alt="" />
          </div>

          <div className="testFormHolder">
            <span className="registerTitle">register</span>
            <form className="registerForm">
              <label>Username</label>
              <input
                type="email"
                className="registerInput"
                placeholder="username"
              />

              <label>Email</label>
              <input
                type="email"
                className="registerInput"
                placeholder="user@xyz.com"
              />
              <label>Password</label>
              <input
                type="password"
                className="registerInput"
                placeholder="Password"
              />
              <button className="registerButton">register</button>
            </form>
          </div>
          <button className="registerRegisterButton">
            <Link to="/login" className="link">
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
