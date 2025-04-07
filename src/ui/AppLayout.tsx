import Calculator from "./Calculator";
import Header from "./Header";
import Screen from "./Screen";

function AppLayout() {
  return (
    <div className="flex w-[30rem] flex-col gap-4">
      <Header />
      <Screen />
      <Calculator />
    </div>
  );
}

export default AppLayout;
