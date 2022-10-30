import "./App.css";
import ListMenu from "./ListMenu";
import RightMenu from "./RightMenu";
import FormModal from "./FormModal";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <ListMenu />
        </div>
        <div className="col-md-9">
          <FormModal />
        </div>
      </div>
    </div>
  );
}

export default App;
