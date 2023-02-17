import Header from "./components/header";
import UpperSection from "./components/upperSection";
import MiddleSection from "./components/middleSection";

function App() {
  return (
    <div className="bg-slate-800 h-screen p-2 absolute w-full">
      <Header />
      <UpperSection />
      <MiddleSection />
    </div>
  );
}

export default App;
