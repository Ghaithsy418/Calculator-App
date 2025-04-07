import { useType } from "../context/useType";
import { useCalculate } from "../hooks/useCalculate";

function Calculator() {
  const { setCalculate, setOperator, calculate, operator } = useType();
  const getResult = useCalculate();
  function handleClick(title: string) {
    switch (title) {
      case "+":
        if (operator !== "") setCalculate(String(getResult()));
        setOperator("+");
        break;
      case "-":
        if (operator !== "") setCalculate(String(getResult()));
        setOperator("-");
        break;
      case "×":
        if (operator !== "") setCalculate(String(getResult()));
        setOperator("×");
        break;
      case "÷":
        if (operator !== "") setCalculate(String(getResult()));
        setOperator("÷");
        break;
      case "DEL":
        setCalculate((v) => v.slice(0, -1));
        if (
          calculate[calculate.length - 1] === "+" ||
          calculate[calculate.length - 1] === "-" ||
          calculate[calculate.length - 1] === "x" ||
          calculate[calculate.length - 1] === "/"
        )
          setOperator("");
        break;
      default:
        break;
    }
    if (title !== "DEL") setCalculate((v) => v + title);
  }
  return (
    <div className="mx-3 grid grid-cols-4 grid-rows-5 gap-5 rounded-md bg-blue-600 px-8 py-7 text-3xl">
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => handleClick(button)}
          className={`${button === "DEL" ? "shadow-blue bg-blue-300 text-2xl text-white hover:bg-blue-400" : "shadow-gray flex items-center justify-center bg-gray-400 text-gray-700 hover:bg-gray-300"} cursor-pointer rounded-md py-2 font-extrabold transition-all duration-300`}
        >
          {button}
        </button>
      ))}
      <button
        onClick={() => setCalculate("")}
        className="shadow-blue text- col-start-1 col-end-3 cursor-pointer rounded-md bg-blue-300 text-2xl font-bold transition-all duration-300 hover:bg-blue-400"
      >
        Reset
      </button>
      <button
        onClick={() => setCalculate(String(getResult()))}
        className="shadow-red text- col-start-3 col-end-5 cursor-pointer rounded-md bg-red-500 text-2xl font-bold transition-all duration-300 hover:bg-red-600"
      >
        =
      </button>
    </div>
  );
}

const buttons = [
  "7",
  "8",
  "9",
  "DEL",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "÷",
  "×",
];

export default Calculator;
