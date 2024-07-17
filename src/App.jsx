import { useState } from "react";
import style from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Container from "./components/Container";
import Display from "./components/Display";

function App() {
  let numbers = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const [currentDisplay, setCurrentDisplay] = useState("");

  const handlerOnClick = (num) => {
    if (num === "C") {
      setCurrentDisplay("");
    } else if (num === "=") {
      const result = eval(currentDisplay);
      setCurrentDisplay(result);
    } else {
      const newDisplayValue = currentDisplay + num;
      setCurrentDisplay(newDisplayValue);
    }
  };

  return (
    <>
      <Container>
        <div className={style.Calculator}>
          <Display currentDisplay={currentDisplay} />
          <ButtonContainer
            numbers={numbers}
            key={numbers}
            handlerOnClick={handlerOnClick}
          />
        </div>
      </Container>
    </>
  );
}

export default App;
