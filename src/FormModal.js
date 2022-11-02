import React from "react";
import { Modal, Button } from "react-bootstrap";
import RightMenu from "./RightMenu";
import ListMenu from "./ListMenu";

const FormModal = ({ closeModal, modal }) => {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      ></div>
      <Modal show={modal} onHide={!modal}>
        <Modal.Body className="pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ListMenu />
              </div>
              <div className="col-md-9">
                <RightMenu />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormModal;
