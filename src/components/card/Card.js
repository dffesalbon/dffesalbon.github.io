import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="card">
        <section className="title">Title</section>
        <section>additional description</section>
        <dl>
          <dt>List one</dt>
          <dd>additional descrption</dd>
          <dd>- item one</dd>
          <dd>- item two</dd>
          <dt>List two</dt>
          <dd>additional descrption</dd>
          <dd>- item one</dd>
          <dd>- item two</dd>
        </dl>
      </div>
    </>
  );
};

export default Card;
