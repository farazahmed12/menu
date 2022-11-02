import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";

import FormModal from "./FormModal";

function App() {
  const [modal, setModal] = React.useState(false);

  return (
    <div className="container mt-5">
      <Button variant="primary" onClick={() => setModal(true)}>
        Form modal
      </Button>
      <FormModal closeModal={setModal} modal={modal} />
    </div>
  );
}

export default App;
