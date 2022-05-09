import "./App.css";
import Content from "./components/content/Content";
import AppFooter from "./components/footer/AppFooter";
import AppHeader from "./components/header/AppHeader";
import Main from "./components/main/Main";

const App = () => {
  return (
    <>
      <div className="App">
        {/*<AppHeader />*/}
        <Main />
        <Content />
      </div>
    </>
  );
};

export default App;
