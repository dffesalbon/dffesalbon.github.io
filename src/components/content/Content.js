import Card from "../card/Card";
import Contact from "../contact/Contact";
import Stack from "../stack/Stack";
import "./Content.css";

const Content = () => {
  const work = {
    title: "Field Background",
    description:
      "I am currently working as a software engineer in a Financial Firm." +
      " With exposure to different technologies and bank applications, I" +
      " work within a squad that provides support and improvements on" +
      " different business applications. This includes coordinating with" +
      " colleagues in North American region, working full-stack across the" +
      " entire software development lifecycle, and participates in agile" +
      " sprints and ceremonies. I also have a previous part-time" +
      " experience as a Java Developer during college days, an IT helpdesk" +
      " internship in a business consulting firm, and an Oracle bootcamp" +
      " training experience.",
  };

  const education = {
    title: "Education",
    description: "Academic background.",
  };

  return (
    <>
      <div className="app-content">
        <Card content={work} />
        {/*<Stack />*/}
        <Card content={education} />
        <Contact />
      </div>
    </>
  );
};

export default Content;
