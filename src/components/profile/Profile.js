import "./Profile.css";
import { GoMarkGithub } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { SiKaggle } from "react-icons/si";

const Profile = () => {
  return (
    <>
      <div className="profile-pic"></div>
      <div className="profile-info unselectable">
        <section>
          Hello world, I am Daniel Fesalbon and I am working as a software
          engineer :)
        </section>
        <div className="info-prompt">
          <div className="contact-icon">
            <a href="https://www.kaggle.com/danielfesalbon">
              <SiKaggle />
            </a>
          </div>
        </div>
        <div className="info-prompt">
          <div className="contact-icon">
            <a href="https://www.linkedin.com/in/daniel-fesalbon-a416261ba/">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <div className="info-prompt">
          <div className="contact-icon">
            <a href="https://github.com/dffesalbon">
              <GoMarkGithub />
            </a>
          </div>
        </div>
        <div className="info-prompt">
          <div className="contact-icon">
            <a href="mailto:fesalbondaniel@gmail.com">
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
