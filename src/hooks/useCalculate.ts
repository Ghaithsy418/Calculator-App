import { useType } from "../context/useType";

export function useCalculate() {
  const { operator, calculate } = useType();

  function getResult() {
    if (!calculate || !operator) return calculate;

    const toCalc = calculate.split(operator);

    const numbers = toCalc.map((string) => parseFloat(string));
    if (!numbers[1]) return numbers[0];
    if (operator === "+") return numbers[0] + numbers[1];
    if (operator === "×") return numbers[0] * numbers[1];
    if (operator === "-") return numbers[0] - numbers[1];
    if (operator === "÷") return numbers[0] / numbers[1];
  }

  return getResult;
}
