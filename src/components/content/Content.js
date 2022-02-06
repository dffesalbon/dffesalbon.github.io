import Card from "../card/Card";
import Contact from "../contact/Contact";
import Stack from "../stack/Stack";
import "./Content.css";

const Content = () => {
  const work = {
    title: "Field Background",
    description: "Short review of past experience.",
    list: [
      {
        name: "Bootcamp Trainee",
        sub: ["- Two months bootcamp training. Java and Oracle."],
      },
      {
        name: "Java Developer",
        sub: ["- Entry level java developer. One year of experience."],
      },
      {
        name: "IT Helpdesk Intern",
        sub: ["- Three months as IT helpdesk intern in a consulting firm."],
      },
    ],
  };

  const education = {
    title: "Education",
    description: "Academic background.",
    list: [
      {
        name: "Master of Science in Computer Engineering",
        sub: ["Polytechnic Univesity of the Philippines", "2021 - Present"],
      },
      {
        name: "Bachelor of Science in Computer Engineering",
        sub: ["Rizal Technological University", "2014 - 2020"],
      },
    ],
  };

  return (
    <>
      <div className="app-content">
        <Card content={work} />
        <Stack />
        <Card content={education} />
        <Contact />
      </div>
    </>
  );
};

export default Content;
