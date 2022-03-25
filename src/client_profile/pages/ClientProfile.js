import React, { useEffect, useState } from 'react';

import { Container, Spinner } from 'react-bootstrap';

import CreateClientProfile from '../components/CreateClientProfile';
import apiClient from '../../resources/apiClient';


const ClientProfile = () => {
  const [loading, setLoading] = useState(false);
  const [client_profile, setClientProfile] = useState(null);

  const addToClientProfile = (val) => {
    setClientProfile(val);
  }

  useEffect(() => {
    
    const getClientProfile = async () => {
      setLoading(true);
      try {
        const response = await apiClient.client_profile.get_client_profile();
        setLoading(false);
        addToClientProfile(response.data);
      } catch (err) {
        // if (err.response.data.status === 404) {
  
        // }
        // handel err better
        setLoading(false);
      }
    };

    getClientProfile();
  }, []);

  const loadingDisplay = loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : null;

  const noClientProfile = !loading && !client_profile ? (
    <CreateClientProfile setClientProfile={addToClientProfile} />
  ) : null;

  const clientProfileDisplay = !loading && client_profile ? (
    <p>
      Client Name: {client_profile.name}
      <br />
      Industry Sector: {client_profile.industry_sector.name}
    </p>
  ) : null;

  return <Container style={{ minHeight: '40vh' }}>
    {loadingDisplay}
    {noClientProfile}
    {clientProfileDisplay}
  </Container>;
};

export default ClientProfile;
