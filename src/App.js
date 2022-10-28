import "./App.css";
import ListMenu from "./ListMenu";
import RightMenu from "./RightMenu";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <ListMenu />
        </div>
        <div className="col-md-9">
          <RightMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
