import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import http from '../../../../resources/http';
const baseURL =
  'https://cyberminds-backend.herokuapp.com/api/threat-catalog-models/industry-sectors/';

const EditModal = () => {
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
          console.log(err);
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

  const handleModalShowHide = () => setSetShowHide(!showHide);
  const handleModalShowHideMe = () => setSetShowHideMe(!showHideMe);
  const handleModalShowHideDelete = () => setSetShowHideDelete(!showHideDelete);
  const [name, setName] = useState();
  const [no_of_admin_users, setAdminUsers] = useState();
  const [no_of_users, setUsers] = useState();
  const [industry_sector, setSector] = useState();
  const [helper, setHelper] = useState();
  const submit = () => {
    http.post('https://cyberminds-backend.herokuapp.com/api/account/clients/', {
      name: name,
      no_of_admins_users: no_of_admin_users,
      no_of_users: no_of_users,
      industry_sector: industry_sector,
    });
  };
  const DisplayData = Object.entries(clients).map(([key, users]) => {
    return (
      <>
        <tr key={key}>
          <td>{users.id}</td>
          <td>{users.name}</td>
          <td>{users.industry_sector.name}</td>
          <td>{users.no_of_admins_users}</td>
          <td>{users.no_of_users}</td>

          <td>
            <IconButton
            //   onClick={() => {
            //     setVal(users.id);
            //     setUsername(users.username);
            //     setEmail(users.email);
            //     setUsertype(users.user_type);
            //     setCompany(users.company_name);
            //     showModal();
            //   }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                http.delete(
                  'https://cyberminds-backend.herokuapp.com/api/account/delete-client-users/' +
                    users.id
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
  console.log(data);
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
              <th>Company Name</th>
              <th>Industry</th>
              <th>No of admin users</th>
              <th>No of users</th>
              <th></th>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="&nbsp;"
              />
              <span class="label">Name</span>
              <span class="focus-bg"></span>
            </label>
            <div class="search_categories w-96">
              <div class="select">
                <select
                  value={industry_sector}
                  onChange={(e) => setSector(e.target.value)}
                >
                  <option value="1" selected="selected">
                    Select Industry Sector
                  </option>
                  {data?.map((x, y) => (
                    <option value={x.id} key={y}>
                      {x.name}
                    </option>
                  ))}
                  {/* <option
                      value={user_type}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      {data.value}
                    </option> */}
                </select>
              </div>
            </div>
            <label for="inp" class="inp">
              <input
                type="text"
                id="inp"
                value={no_of_admin_users}
                onChange={(e) => setAdminUsers(e.target.value)}
                placeholder="&nbsp;"
              />
              <span class="label">Number of admin</span>
              <span class="focus-bg"></span>
            </label>
            <label for="inp" class="inp">
              <input
                type="text"
                id="inp"
                value={no_of_users}
                onChange={(e) => setUsers(e.target.value)}
                placeholder="&nbsp;"
              />
              <span class="label">No of users</span>
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
              <input type="text" id="inp" placeholder="&nbsp;" />
              <span class="label">Name</span>
              <span class="focus-bg"></span>
            </label>
            <div class="search_categories w-96">
              <div class="select">
                <select>
                  <option value="1" selected="selected">
                    Select Client
                  </option>
                  {data?.map((x, y) => (
                    <option
                      value={val}
                      onChange={(e) => setVal(e.target.value)}
                      key={y}
                    >
                      {x.name}
                    </option>
                  ))}
                  {/* <option
                      value={user_type}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      {data.value}
                    </option> */}
                </select>
              </div>
            </div>
            <label for="inp" class="inp">
              <input type="text" id="inp" placeholder="&nbsp;" />
              <span class="label">Number of admin</span>
              <span class="focus-bg"></span>
            </label>
            <label for="inp" class="inp">
              <input type="text" id="inp" placeholder="&nbsp;" />
              <span class="label">No of users</span>
              <span class="focus-bg"></span>
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleModalShowHideMe()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleModalShowHideMe()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModal;
