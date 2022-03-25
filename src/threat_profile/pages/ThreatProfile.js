import React, { useState } from 'react';

import Papa from 'papaparse';

import { Container, Form, Button } from 'react-bootstrap';

import apiClient from '../../resources/apiClient';
import ThreatProfileTable from '../components/ThreatProfileTable';

const ThreatProfile = () => {
  const [file, setFile] = useState(null);
  const [asset_choices, setAssetChoice] = useState(null);
  const [selected_choices, setSelectedChoices] = useState([]);

  const [threat_catalog, setThreatCatalog] = useState([]); 

  const onFileChange = (e) => {
    setFile(() => {
      return e.target.files[0]
    });
  };

  const loadCSV = () => {
    Papa.parse(file, {
      complete: updateData,
      header: true
    });
  };

  const updateData = (result) => {
    let temp = result.data.map(r => r["Asset Type"]).filter(r => r);
    let res = new Set(temp);
    setAssetChoice([...res]);
  };

  const profile_threat = async() => {
    try {
      const response = await apiClient.profile_threat.profile_threat({
        assets: selected_choices,
      });
      setThreatCatalog([...response.data]);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <Container style={{minHeight: '250px'}}>
        <h3>
          Profile Threat: {selected_choices.map(c=> (
                            <span style={{fontSize: '.7em'}} key={c}>{c}, </span>
                          ))}
        </h3>
        <Form.Group controlId="formFile" className="mb-3">
          <br />
          <Form.Label>Upload CSV file.</Form.Label>
          <br />
          <Form.Control onChange={onFileChange} type="file" accept=".csv" />
        </Form.Group>
        {file != null &&  
          <Button onClick={loadCSV} variant="primary" type="submit">
            Load
          </Button>}
          <br />
          {asset_choices &&  (
            <Form.Group controlId="asset_choice" className="mb-3">
              <br />
              <Form.Label>Choose Asset Type</Form.Label>
              <Form.Control 
                as="select" 
                multiple 
                onChange={e => setSelectedChoices([].slice.call(e.target.selectedOptions).map(item => item.value))}
              >
                {asset_choices.map(ac => {
                  return (
                    <option key={ac} value={ac}>{ac}</option>
                  )
                })}
              </Form.Control>
            </Form.Group>
          )}
          {selected_choices.length > 0 && (
            <Button onClick={profile_threat} variant="primary" type="submit">
              Profile Threat
            </Button>
          )}
          {threat_catalog.length > 0 && <ThreatProfileTable threat_catalog={threat_catalog} />}
          
      </Container>
    </>
  )
};

export default ThreatProfile;