import "./Main.css";
import { IoSchoolOutline } from "react-icons/io5";
import { CgWorkAlt } from "react-icons/cg";
import { RiStackLine } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";

const Main = () => {
  return (
    <>
      <div className="main-page">
        <div className="main-menu">
          <div className="menu-item">
            <CgWorkAlt /> Background
          </div>
          <div className="menu-item">
            <RiStackLine /> Stack
          </div>
          <div className="menu-item">
            <IoSchoolOutline /> Education
          </div>
          <div className="menu-item">
            <MdContactPage /> Contacts
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
