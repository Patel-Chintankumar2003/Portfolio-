import { Button, Typography } from "@mui/material";
// , useEffect 
import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/ReactToastify.css" // Import toast styles
import { login } from "../../actions/user.js";
import "./Login.css";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // , message, error
  const { loading } = useSelector((state) => state.login);

  const submitHandler = (e) => {
    e.preventDefault();
     dispatch(login(email, password))
      .then(() => {
        toast.success("Login successful!"); // Show success toast
      })
      .catch((error) => {
        toast.error(`Login failed: ${error.message}`); // Show error toast
      });
  };
    // dispatch(login(email, password));
  // };

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error); // Show error notification
  //     dispatch({ type: "CLEAR_ERRORS" });
  //   }
  //   if (message) {
  //     toast.success(message); // Show success notification
  //     dispatch({ type: "CLEAR_MESSAGE" });
  //   }
  // }, [error, message, dispatch]);

  return (
    <div className="login">
      <div className="loginContainer">
        <form className="loginForm" onSubmit={submitHandler}>
          <Typography variant="h4">
            <p>A</p>
            <p>D</p>
            <p>M</p>
            <p>I</p>
            <p style={{ marginRight: "1vmax" }}>N</p>

            <p>P</p>
            <p>A</p>
            <p>N</p>
            <p>E</p>
            <p>L</p>
          </Typography>

          <div>
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={loading} // Disable button if loading
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
