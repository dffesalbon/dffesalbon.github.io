import "./Pager.css";

const Pager = (props) => {
  const { no } = props;
  return (
    <>
      <div className="page-footer">
        DANIEL FESALBON <div className="page-no">{no}</div>
      </div>
    </>
  );
};
export default Pager;
