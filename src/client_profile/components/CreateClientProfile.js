import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import ClientProfileForm from './ClientProfileForm';

const CreateClientProfile = ({ setClientProfile }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>no client profile</div>
      <Button variant="primary" onClick={handleShow}>
        Add Client Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Create Client Profile</Modal.Title>
        </Modal.Header>
        <ClientProfileForm handleClose={handleClose} setClientProfile={setClientProfile} />
      </Modal>
    </>
  );
};

export default CreateClientProfile;
