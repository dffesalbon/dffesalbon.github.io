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
      " entire software development lifecycle, and participating in agile" +
      " sprints and ceremonies. I also have a previous part-time" +
      " experience as a Java Developer during college days, an IT helpdesk" +
      " internship in a business consulting company, and a coding" +
      " bootcamp experience at Oracle.",
    no: 1,
  };

  const education = {
    title: "Education",
    description:
      "Currently pursuing a master's degree in computer engineering." +
      " A research based program that specializes in data science & engineering." +
      " Studies include topics such as Intelligent systems, Artificial Intelligence," +
      " Machine Learning, Deep Learning, Data science & engineering, and Internet of" +
      " Things(IoT). Holding a bachelor's degree of the same program (BSCpE) with relevant" +
      " courses such as Programming fundamentals, Object-oriented programming," +
      " Logic circuits and switching theory, Operating systems , Database management," +
      " Data structure and algorithms, Software engineering, Computer networks, and some maths.",
    no: 3,
  };

  const skills = {
    title: "Skills & Knowledge",
    description:
      " I have a working knowledge and proficieny in Java. A good understanding of OOP concepts." +
      " A hands-on personal experience with Python. Javascript and different" +
      " development frameworks such as React.js, Angular, Spring Boot, Django, and NodeJS." +
      " Work and personal experience with different databases such as Oracle, MySQL," +
      " MS SQL, and PostgreSQL. A work experience and knowledge with .Net C#, with Git, Jira, " +
      " Confluence, and other project development resources and technologies. Analysis " +
      " and troubleshooting skills. Ability to work independently and/or as a team." +
      " Training, hands-on experience, and/or understanding with other techonologies" +
      " such as Jenkins, GraphQL, CICD pipelines, Docker, Cloud technologies, and more.",
    no: 2,
  };

  return (
    <>
      <div className="app-content">
        <Card content={work} />
        {/*<Stack />*/}
        <Card content={skills} />
        <Card content={education} />
        <Contact />
      </div>
    </>
  );
};

export default Content;
