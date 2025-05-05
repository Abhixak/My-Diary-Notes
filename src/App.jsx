// import Logo from "/mydiarynotes.png"

import { useEffect, useState } from "react";
import Loader from "./Pages/Loader";
import Home from "./Pages/Home";
import UserAuth from "./Pages/UserAuth";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // default false

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Simulate auth check (replace this with real logic)
      const loggedIn = localStorage.getItem("loggedIn") === "true";
      setIsLoggedIn(loggedIn);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
      {isLoggedIn ? <Home /> : <UserAuth />}
    </div>
  );
};

export default App;

