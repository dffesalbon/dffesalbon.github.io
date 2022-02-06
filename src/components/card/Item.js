import "./Card.css";

const Item = (props) => {
  const { properties } = props;

  let { name } = properties !== undefined ? properties : {};
  name = name !== undefined ? name : "";

  let { sub } = properties !== undefined ? properties : {};
  sub = sub !== undefined ? sub : [];

  return (
    <div className="item">
      <dt>{name}</dt>
      {sub.map((o, i) => (
        <dd key={i}>{o}</dd>
      ))}
    </div>
  );
};

export default Item;
