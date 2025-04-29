import { useState } from "react";

const course = {
  name: "Half Stack application development",
  parts: [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ],
};

const Header = (props) => {
  console.log(props);
  return <p>{props.course.name}</p>;
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((item, index) => (
        <p key={item.name}>
          {index + 1}: {item.name} - cantidad de ejercicios: {item.exercises}
        </p>
      ))}
    </>
  );
};

const Total = ({ course }) => {
  const sum = course.parts.reduce((acc, item) => acc + item.exercises, 0);
  return <p>El total de la suma de ejercicios es: {sum}</p>;
};

const App = () => {
  return (
    <>
      <div>
        <h2>
          <Header course={course}></Header>
        </h2>
        <Content course={course}></Content>
        <br />
        <Total course={course}></Total>
      </div>
    </>
  );
};

export default App;
