import "./Profile.css";
import { IoSchoolOutline } from "react-icons/io5";
import { CgWorkAlt } from "react-icons/cg";
import { RiStackLine } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";

const Profile = () => {
  return (
    <>
      <div className="profile-pic"></div>
      <div className="profile-info unselectable">
        <section>Hello world, I am Daniel Fesalbon</section>
        <section>and I am working as a software engineer :)</section>
      </div>
      <div className="info-prompt unselectable">check my links below</div>
    </>
  );
};

export default Profile;
