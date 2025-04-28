import { useState } from "react";

const course = "Half Stack application development";

const partcourse = [
  { name: "Fundamentals of React" },
  { name: "Using props to pass data" },
  { name: "State of a component" },
];

const cantejerc = [{ cantidad: 10 }, { cantidad: 7 }, { cantidad: 14 }];

const Header = (props) => {
  return <p>{props.course}</p>;
};

const Content = ({ partcourse }) => {
  return partcourse.map((item, index) => (
    <p key={index}>
      {index + 1} : {item.name}
    </p>
  ));
};

const Total = ({ cantejerc }) => {
  const sum = cantejerc.reduce((acc, item) => acc + item.cantidad, 0);
  return <p>El total de la suma de ejercicios es: {sum}</p>;
};

const App = () => {
  return (
    <>
      <div>
        <h2>
          <Header course={course}></Header>
        </h2>
        <Content partcourse={partcourse}></Content>
        <br />
        <Total cantejerc={cantejerc}></Total>
      </div>
    </>
  );
};

export default App;
