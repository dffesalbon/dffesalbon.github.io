import Card from "../card/Card";
import Stack from "../stack/Stack";
import "./Content.css";

const Content = () => {
  return (
    <>
      <div className="app-content">
        <Card />
        <Card />
        <Stack />
      </div>
    </>
  );
};

export default Content;
