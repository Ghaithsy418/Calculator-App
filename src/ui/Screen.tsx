import { useType } from "../context/useType";

function Screen() {
  const { calculate } = useType();
  return (
    <div className="mx-3 h-30 rounded-md bg-blue-700 text-slate-100">
      <input
        className="h-full w-full cursor-text px-8 py-16 text-5xl font-bold"
        disabled={true}
        value={calculate}
        type="text"
      />
    </div>
  );
}

export default Screen;
