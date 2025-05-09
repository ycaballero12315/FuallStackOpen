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

const Edad = ({ birthYear, birthMonth, birthDay }) => {
  const date = new Date();
  const currentYear = date.getFullYear();

  let age = currentYear - birthYear;

  const hasBirthayPassed =
    date.getDay() >= birthMonth || date.getDay() > birthDay;

  if (!hasBirthayPassed) {
    age--;
  }
  return (
    <p>
      usted tiene: {age} annos. nacio el {birthDay}/{birthMonth}/{birthYear}
    </p>
  );
};

const Counter = () => {
  let [count, setCounter] = useState(0);
  return (
    <div>
      <p>usted a clikeado {count} veces...</p>
      <button onClick={() => setCounter(count + 1)}>ClicMe</button>
      <br />
      <button onClick={() => setCounter((count = 0))}>Resset</button>
    </div>
  );
};

const MostrarTexto = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Mostrar"} mensaje
      </button>
      {visible && "!Hello soy el mensaje oculto"}
    </div>
  );
};

const Formulario = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Escibe tu nomble please: "
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>Su nombre es {name}</p>
    </div>
  );
};

const Semaforo = () => {
  const [colorActivo, setColor] = useState("");
  const [colorFondo, setColorFondo] = useState({});

  return (
    <div>
      <h2>Semaforo</h2>
      <button
        onClick={() => {
          setColor("Rojo");
          setColorFondo({ backgroundColor: "red" });
        }}
      >
        Rojo
      </button>
      <button
        onClick={() => {
          setColor("Amarillo");
          setColorFondo({ backgroundColor: "yellow" });
        }}
      >
        Amarillo
      </button>
      <button
        onClick={() => {
          setColor("Verde");
          setColorFondo({ backgroundColor: "green" });
        }}
      >
        Verde
      </button>
      {colorActivo && (
        <p style={{ padding: "10px", color: "black", ...colorFondo }}>
          El color activo es:
          <strong>{colorActivo}</strong>
        </p>
      )}
    </div>
  );
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
      <div>
        <Edad birthYear={1983} birthDay={31} birthMonth={12}></Edad>
      </div>
      <Counter></Counter>
      <MostrarTexto></MostrarTexto>
      <br />
      <Formulario></Formulario>
      <Semaforo></Semaforo>
    </>
  );
};

export default App;
