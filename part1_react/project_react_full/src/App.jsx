import { useRef, useEffect, useState } from "react";

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

const CounterAutomatic = () => {
  const [count, setCount] = useState(0);

  console.log("renderizando", count);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>pluss</button>
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
  const colores = ["red", "yellow", "green"];
  const [indice, setIndice] = useState(0);
  const [activo, setActivo] = useState(false);
  const refActive = useRef(null);

  useEffect(() => {
    if (activo) {
      refActive.current = setInterval(() => {
        setIndice((prev) => (prev + 1) % colores.length);
      }, 2000);
    } else {
      return () => clearInterval(refActive.current);
    }

    return () => clearInterval(refActive.current);
  }, [activo]);

  const getEstilo = (color) => ({
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    margin: "10px",
    backgroundColor: colores[indice] === color ? color : "gray",
    border: "2px solid black",
  });

  return (
    <div style={{ textAlign: "center" }}>
      {/* Círculos */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={getEstilo("red")}></div>
        <div style={getEstilo("yellow")}></div>
        <div style={getEstilo("green")}></div>
      </div>

      {/* Semaforo */}
      <p style={{ marginTop: "20px" }}>
        Color actual: <strong>{colores[indice]}</strong>
      </p>
      {/* Botón de control */}
      <button
        onClick={() => setActivo(!activo)}
        style={{ marginTop: "10px", padding: "10px 20px" }}
      >
        {activo ? "Pausar" : "Iniciar"}
      </button>
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
      <CounterAutomatic></CounterAutomatic>
      <MostrarTexto></MostrarTexto>
      <br />
      <Formulario></Formulario>
      <Semaforo></Semaforo>
    </>
  );
};

export default App;
