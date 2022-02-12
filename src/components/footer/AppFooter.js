import "./AppFooter.css";
import { GoMarkGithub } from "react-icons/go";

const AppFooter = () => {
  return (
    <>
      <div className="app-footer">
        <div className="main-footer">This is a footer</div>
        <div className="sub-footer sf-left">© 2022 DANIEL FESALBON</div>
        <div className="sub-footer sf-right sf-icon">
          <a href="https://github.com/dffesalbon">
            <GoMarkGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default AppFooter;
