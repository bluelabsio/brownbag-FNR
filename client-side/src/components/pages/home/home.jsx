import { useEffect, useState } from "react";
import "./home.scss";
// import TextField from "@cmsgov/design-system/dist/components/TextField/TextField";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connect } from "react-redux";
import { login } from "../../../state/action/session";

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});


const Home = ({ session, login }) => {

  const [loginInfo, setLoginInfo]= useState({
    username: '',
    password: '',
    loginStatus: '',
    submitted: false 
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyInfo = { ...loginInfo, [name]: value };
    setLoginInfo(copyInfo);
  };


  const auth =  () => {
    const user = {
      username: loginInfo.username,
      password: loginInfo.password,
    };
    login(user);
    setErrors({username: '', password: ''});
  };

  const handleSubmit= (e) => {
    auth();
  };

  const handleKeypress = e => {
    //it triggers by pressing the enter key
    
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (session.errors) {
      console.log(session.errors);
      const {error, message} = session.errors;
      if (session.status === 401) toast.error(error);
      if (session.status === 404) toast.warn(error);
      if (message) toast.info(message);
    }
  }, [session]);

  useEffect(() => {
    if (errors.username) toast.warn(errors.username);
    if (errors.password) toast.warn(errors.password);
  }, [errors]);

  return (
    <>
    <section className="content">
      <div className="center">
        <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover/>
        <div className="login-body">
          <div className="login-box">
            <div id="login-message">
                Sign in to see data
            </div>
            <div className="login-form">
              <TextField
                    label="User"
                    name="username"
                    id="username"
                    value={loginInfo.username} 
                    onChange={handleChange}
                    onKeyPress={handleKeypress}
                  />
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    id="password"                   
                    value={loginInfo.password} 
                    onChange={handleChange}
                    onKeyPress={handleKeypress}
                  />
                <Button
                    type="submit"
                    variation="primary"
                    className="ds-u-margin-top--2"
                    onClick={handleSubmit}
                  >
                  Sign in
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);