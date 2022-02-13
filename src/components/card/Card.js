import "./Card.css";
import Item from "./Item";

const Card = (props) => {
  const { content } = props;
  let list = content.list;

  return (
    <>
      <div className="card">
        {/*<section className="title">{content.title}</section>
        <section>{content.description}</section>
        <dl>
          {list.map((o, i) => (
            <Item key={i} properties={o} />
          ))}
          </dl>*/}
        <div className="row">
          <div className="column ">
            <p className="title tile-column unselectable">{content.title}</p>
            <p></p>
          </div>
          <div className="column">
            {/*<h2>Column 2</h2>*/}
            <p className="paragraph unselectable"> {content.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
