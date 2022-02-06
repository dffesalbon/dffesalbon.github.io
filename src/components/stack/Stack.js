import "./Stack.css";

const Stack = () => {
  const stacks = [
    { name: "Java" },
    { name: "Python" },
    { name: "Javascript" },
    { name: "React.js" },
    { name: "Angular" },
    { name: "PostgreSQL" },
    { name: "Oracle" },
    { name: "MySQL" },
    { name: "Spring Boot" },
    { name: "Django" },
    { name: "NodeJS" },
  ];

  return (
    <>
      <div className="card">
        <section className="title">Stacks</section>
        <section>Stacks used, familiarized, or have some knowledge</section>
        <div className="container">
          {stacks.map((stack, i) => (
            <div key={i} className="stack">
              {stack.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stack;
