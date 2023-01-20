//import { Habit } from './components/Habit'
import { Cabecalho } from "./components/Cabecalho";
import { SummaryTable } from "./components/SummaryTable";
import "./index.css";
import './lib/dayJs'


export function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Cabecalho />
        <SummaryTable />
      </div>
    </div>
  );
}
