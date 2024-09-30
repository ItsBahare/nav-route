
import "../public/build/tailwind.css";
import Navbar from "./components/Navbar";
import Route from "./components/RouteNav";

function App() {
  return (
    <>
      <div className="flex flex-row items-center flex-nowrap">
        <Navbar />
        <div className="container mx-auto p-1">
          <Route />
          <h4 className="mx-auto mt-14 bg-slate-400 w-52 ">THIS IS FOOTER</h4>
        </div>
      </div>
    </>
  );
}

export default App;
