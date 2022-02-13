import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="column ">
            <p className="title tile-column unselectable">Contact</p>
            <p></p>
          </div>
          <div className="column">
            <p className="paragraph unselectable">
              You can reach me out with the following:
            </p>
            <p className="paragraph unselectable">
              Github: <a href="https://github.com/dffesalbon">dffesalbon</a>
            </p>
            <p className="paragraph unselectable">
              Email:
              <a href="mailto:fesalbondaniel@gmail.com">
                fesalbondaniel@gmail.com
              </a>
            </p>
            <p className="paragraph unselectable">
              Linkedin:{" "}
              <a href="https://www.linkedin.com/in/daniel-fesalbon-a416261ba/">
                Daniel Fesalbon
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
