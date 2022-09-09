import IntroPage from "./components/IntroPage";
import NavBar from "./components/NavBar";
import React from "react";
import { useMediaQuery } from "react-responsive";
import IntroPageMobile from "./components/IntroPageMobile";

function App() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 600px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div>
      <NavBar />
      {isBigScreen && <IntroPage />}
      {isTabletOrMobile && <IntroPageMobile />}
    </div>
  );
}

export default App;
