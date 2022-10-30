import React from "react";
import { Modal, Button } from "react-bootstrap";

const FormModal = () => {
  const [modal, setModal] = React.useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={openModal}>
          Form modal
        </Button>
      </div>
      <Modal show={modal} onHide={!modal}>
        <Modal.Header>
          <h2>Search Customer</h2>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label
                      for="exampleInputEmail1"
                      className="font-weight-bold"
                    >
                      By Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label
                      for="exampleInputPassword1"
                      className="font-weight-bold"
                    >
                      By Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>

              <h2 className="my-2">Add Customer </h2>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label
                      for="exampleInputEmail1"
                      className="font-weight-bold"
                    >
                      Name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label
                      for="exampleInputPassword1"
                      className="font-weight-bold"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label
                      for="exampleInputEmail1"
                      className="font-weight-bold"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group ">
                    <label
                      for="exampleInputPassword1"
                      className="font-weight-bold"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Address"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5 ml-3 mt-4 px-4">
                  <button
                    type="button"
                    class="btn btn-success btn-lg font-weight-bold"
                  >
                    CONFIRM
                  </button>
                </div>
                <div className="col-md-5 ml-3 mt-4 px-4 font-weight-bold">
                  <button type="button" class="btn btn-secondary btn-lg">
                    CANCEL
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModal;
