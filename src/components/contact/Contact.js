import "./Contact.css";
import { GoMarkGithub } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { SiKaggle } from "react-icons/si";
import Pager from "../pager/Pager";
const Contact = () => {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="column ">
            <p className="title tile-column unselectable">Links</p>
            <p></p>
          </div>
          <div className="column">
            <div className="contact">
              <div className="contact-icon">
                <a href="https://github.com/dffesalbon">
                  <GoMarkGithub />
                </a>
              </div>
            </div>

            <div className="contact">
              <div className="contact-icon">
                <a href="mailto:fesalbondaniel@gmail.com">
                  <MdEmail />
                </a>
              </div>
            </div>

            <div className="contact">
              <div className="contact-icon">
                <a href="https://www.linkedin.com/in/daniel-fesalbon-a416261ba/">
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
            <div className="contact">
              <div className="contact-icon">
                <a href="https://www.kaggle.com/danielfesalbon">
                  <SiKaggle />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Pager no={1} />
      </div>
    </>
  );
};

export default Contact;
