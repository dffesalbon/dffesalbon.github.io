import "./Card.css";
import Item from "./Item";

const Card = (props) => {
  const { content } = props;
  let list = content.list;

  return (
    <>
      <div className="card">
        <section className="title">{content.title}</section>
        <section>{content.description}</section>
        <dl>
          {list.map((o, i) => (
            <Item key={i} properties={o} />
          ))}
        </dl>
      </div>
    </>
  );
};

export default Card;
