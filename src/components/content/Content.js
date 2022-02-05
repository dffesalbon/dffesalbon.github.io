import Card from "../card/Card";
import Contact from "../contact/Contact";
import Stack from "../stack/Stack";
import "./Content.css";

const Content = () => {
  return (
    <>
      <div className="app-content">
        <Card />
        <Stack />
        <Card />
        <Contact />
      </div>
    </>
  );
};

export default Content;
