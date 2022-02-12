import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="column ">
            <p className="title tile-column">Contacts</p>
            <p></p>
          </div>
          <div className="column">
            <p className="paragraph">
              You can reach me out with the following:
            </p>
            <p className="paragraph">
              Github: <a href="https://github.com/dffesalbon">dffesalbon</a>
            </p>
            <p className="paragraph">Email: fesalbondaniel@gmail.com</p>
            <p className="paragraph">
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
