import "./App.css";
import Navbar from "./components/Navbar";
import Route from "./components/RouteNav";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="main_content">
          <Route />
          <h4>THIS IS FOOTER</h4>
        </div>
      </div>
    </>
  );
}

export default App;
