import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Main from './Main';
function App() {
  const adminUser = {
    email: "dhruv@gmail.com",
    password: "123",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("details do not match");
      setError("Details do not match");
    }
  };
  const Logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <div className="App">
      {/* <video src="/videos/video-2.mp4" autoPlay loop muted></video> */}
      {user.email !== "" ? (
        <div className="welcome">
          <h2><br></br><br></br><br></br>
          <br></br><br></br><br></br>
          <br></br><br></br><br></br>
          <br></br><br></br><br></br>
          <br></br><br></br><br></br>
          <br></br><br></br><br></br>
          
         
          <button onClick={Logout}>Log Out</button>
          <hr></hr>
           <Main/>
          </h2>
          
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
