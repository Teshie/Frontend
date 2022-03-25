import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import http from '../../../../resources/http';
import Signup from '../../../../auth/pages/Login';
const baseURL =
  'https://cyberminds-backend.herokuapp.com/api/threat-catalog-models/industry-sectors/';

const ManageIndustries = () => {
  const [data, setData] = useState([]);
  const [clients, setClients] = useState([]);
  const [val, setVal] = useState();

  useEffect(() => {
    http
      .get(baseURL)
      .then((response) => {
        setData(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          console.log(err);
        }
      );
    http
      .get('https://cyberminds-backend.herokuapp.com/api/account/get-clients')
      .then((response) => {
        setClients(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          alert(err);
        }
      );
    // http
    //   .get("http://127.0.0.1:8000/api/account/clients")
    //   .then((response) => {
    //     setData(response.data);
    //   })
    //   .then(
    //     (response) => {},
    //     (err) => {
    //       alert(err);
    //     }
    //   );
  }, []);
  console.log(clients);
  const [showHide, setSetShowHide] = useState(false);
  const [showHideMe, setSetShowHideMe] = useState(false);
  const [showHideDelete, setSetShowHideDelete] = useState(false);
  const [industry, setIndustry] = useState();
  const [edit_sector, setEditSector] = useState();

  const handleModalShowHide = () => setSetShowHide(!showHide);
  const handleModalShowHideMe = () => setSetShowHideMe(!showHideMe);
  const handleModalShowHideDelete = () => setSetShowHideDelete(!showHideDelete);

  const submit = (e) => {
    http
      .post(
        'https://cyberminds-backend.herokuapp.com/api/threat-catalog-models/industry-sectors/',
        {
          withCredentials: true,
          name: industry,
        }
      )
      .then(
        (response) => {
          alert('successeded');
        },
        (err) => {
          console.log(err);
        }
      );
    window.location.reload();
  };
  const DisplayData = Object.entries(data).map(([key, sectors]) => {
    return (
      <>
        <tr key={key}>
          <td>{sectors.id}</td>
          <td>{sectors.name.toUpperCase()}</td>
          <td>
            <IconButton
              onClick={() => {
                setVal(sectors.id);
                handleModalShowHideMe();
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                http.delete(
                  'https://cyberminds-backend.herokuapp.com/api/account/delete-client-users/' +
                    sectors.id
                );
                window.location.reload();
              }}
            >
              <DeleteIcon />
            </IconButton>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div>
      <div className="container-table ">
        <div className="flex justify-end items-end mb-8">
          <Button
            variant="outline-success"
            className="flex justify-end items-end"
            onClick={() => {
              handleModalShowHide();
            }}
          >
            <AddIcon />
            Add new
          </Button>{' '}
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Industry Name</th>

              <th>Manage</th>
            </tr>
          </thead>

          <tbody>{DisplayData}</tbody>
        </table>
      </div>
      <Modal show={showHide} className="mt-64">
        <Modal.Header closeButton onClick={() => handleModalShowHide()}>
          <Modal.Title>Add new record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-modal flex flex-col space-y-2 ">
            <label for="inp" class="inp">
              <input
                type="text"
                id="inp"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="&nbsp;"
              />
              <span class="label">Name</span>
              <span class="focus-bg"></span>
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModalShowHide()}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleModalShowHide();
              submit();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showHideDelete} className="mt-64">
        <Modal.Header closeButton onClick={() => handleModalShowHideDelete()}>
          <Modal.Title>Delete record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Are you sure you want to delete?</span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => handleModalShowHideDelete()}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleModalShowHideDelete()}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showHideMe} className="mt-64">
        <Modal.Header closeButton onClick={() => handleModalShowHideMe()}>
          <Modal.Title>Edit record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-modal flex flex-col space-y-2 ">
            <label for="inp" class="inp">
              <input
                type="text"
                id="inp"
                value={edit_sector}
                onChange={(e) => setEditSector(e.target.value)}
                placeholder="&nbsp;"
              />
              <span class="label">Name</span>
              <span class="focus-bg"></span>
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModalShowHideMe()}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              http.put(
                'https://cyberminds-backend.herokuapp.com/api/threat-catalog-models/industry-sectors/' +
                  val,
                {
                  name: edit_sector,
                }
              );
              handleModalShowHideMe();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageIndustries;
