import Header from "./elements/Header";
import React, { useState, useEffect } from "react";
import Tabs from "./elements/Tabs";
import Loading from "./elements/Loading";
import { loginContext, members, memberContext } from "./contexts/context";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [memberFile, setMemberFile] = useState(members);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <loginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <memberContext.Provider value={{ memberFile, setMemberFile }}>
        <div>
          {loading ? (
            <div style={styles.loadingScreen}>
              {/* <LoadingScreen /> */}
              <Loading />
            </div>
          ) : (
            <>
              <Header hName={"HappyTails.care"} />
              <Tabs />
            </>
          )}
        </div>
      </memberContext.Provider>
    </loginContext.Provider>
  );
};

// Styles for the loading screen and main content
const styles = {
  loadingScreen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#282c34",
    color: "white",
    flexDirection: "column",
  },
  mainContent: {
    padding: "20px",
  },
};

export default App;
