import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface contextTypes {
  calculate: string;
  setCalculate: Dispatch<SetStateAction<string>>;
  operator: string;
  setOperator: Dispatch<SetStateAction<string>>;
}

const typeContext = createContext<contextTypes>({
  calculate: "",
  setCalculate: () => {},
  operator: "",
  setOperator: () => {},
});

function TypeProvider({ children }: { children: ReactNode }) {
  const [calculate, setCalculate] = useState("");
  const [operator, setOperator] = useState("");

  return (
    <typeContext.Provider
      value={{ calculate, setCalculate, operator, setOperator }}
    >
      {children}
    </typeContext.Provider>
  );
}

function useType() {
  const context = useContext(typeContext);
  if (context === undefined)
    throw new Error("Type context shouldn't be used here");
  return context;
}

export { useType, TypeProvider };
