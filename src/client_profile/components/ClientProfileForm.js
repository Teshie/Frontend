import React, { useState, useEffect } from 'react';
import { Form, Spinner, Modal, Button } from 'react-bootstrap';

import apiClient from '../../resources/apiClient';

const ClientProfileForm = ({ handleClose, setClientProfile }) => {
  const [loading, setLoading] = useState(false);
  const [industry_sectors, setIndustrySectors] = useState([]);

  const [client_name, setClientName] = useState('');
  const [selected_industry_sector, setSelectedIndustrySector] = useState(-1);

  const submit = async () => {
    if (selected_industry_sector === -1 || client_name.length < 3) return;
    try {
      const response = await apiClient.client_profile.create_client_profile({
        name: client_name,
        industry_sector: selected_industry_sector
      });
      setClientProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const getIndustrySectors = async () => {
    setLoading(true);
    try {
      const response = await apiClient.client_profile.get_industry_sectors();
      setLoading(false);
      setIndustrySectors(response.data);
    } catch (err) {
      // if (err.response.data.status === 404) {

      // }
      // handel err better
      setLoading(false);
    }
  };

  useEffect(() => {
    getIndustrySectors();
  }, []);

  const loadingDisplay = loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : null;

  return (
    <>
    <Modal.Body>
      {loadingDisplay}
      {!loading && (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Client name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Client name"
              value={client_name}
              onChange={e => setClientName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Industry sector</Form.Label>
            <br />
            <Form.Control 
              as="select" 
              custom
              value={selected_industry_sector}
              onChange={e => setSelectedIndustrySector(e.target.value)}  
            >
              <option value={-1}>----------</option>
              {industry_sectors.map(({ id, name }) => {
                return (
                  <option key={id} value={id}>
                    {name}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        </Form>
      )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={submit}>
          Save
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ClientProfileForm;
