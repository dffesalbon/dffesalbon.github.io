import "./App.css";
import Content from "./components/content/Content";
import AppFooter from "./components/footer/AppFooter";
import AppHeader from "./components/header/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Content />
      <AppFooter />
    </div>
  );
}

export default App;
