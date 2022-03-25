import React, { useState } from "react";

import { Container, Form, Button } from "react-bootstrap";

import apiClient from "../../resources/apiClient";
import { years, currentYear } from "../../resources/helpers";

const UploadThreatProfile = () => {
  const [file, setFile] = useState(null);
  const [risk_file, setRiskFile] = useState(null);
  const [selected_year, setSelectedYear] = useState(currentYear());

  const onFileChange = (e) => {
    setFile(() => {
      return e.target.files[0];
    });
  };

  const onRiskFileChange = (e) => {
    setRiskFile(() => {
      return e.target.files[0];
    });
  };

  const submit = async () => {
    let formData = new FormData();
    formData.append("file", file);

    try {
      const response = await apiClient.admin.upload_threat_catalog_excel(
        formData
      );
      setFile(() => null);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const submitRisk = async () => {
    let formData = new FormData();
    formData.append("file", risk_file);
    formData.append("year", selected_year);

    try {
      const response = await apiClient.admin.upload_risk_excel(formData);
      setRiskFile(() => null);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ height: "350px" }}>
      <Container>
        <h1>Upload threat profile</h1>
        <Form.Group controlId="formFile" className="mb-3">
          <br />
          <Form.Label>Upload EXCEL file.</Form.Label>
          <br />
          <Form.Control onChange={onFileChange} type="file" accept=".xlsx" />
        </Form.Group>
        {file != null && (
          <Button onClick={submit} variant="primary" type="submit">
            Load
          </Button>
        )}

        <br />
        <h1>Upload Risk</h1>
        <Form.Group controlId="formFile" className="mb-3">
          <br />
          <Form.Label>Upload EXCEL file.</Form.Label>
          <br />
          <Form.Control
            onChange={onRiskFileChange}
            type="file"
            accept=".xlsx"
          />

          <Form.Control
            as="select"
            custom
            value={selected_year}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years().map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        {risk_file != null && (
          <Button onClick={submitRisk} variant="primary" type="submit">
            Load
          </Button>
        )}
      </Container>
    </div>
  );
};

export default UploadThreatProfile;
