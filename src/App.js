import "./App.css";
import Content from "./components/content/Content";
import AppFooter from "./components/footer/AppFooter";
import AppHeader from "./components/header/AppHeader";
import Main from "./components/main/Main";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Daniel Fesalbon";
  }, ["Daniel Fesalbon"]);

  return (
    <>
      <div className="App">
        {/*<AppHeader />*/}
        <Main />
        <Content />
        <AppFooter />
      </div>
    </>
  );
};

export default App;
