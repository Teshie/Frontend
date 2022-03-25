import React, { useState, useEffect } from 'react';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleSwitch from './ToggleSwitch';
import { ButtonBase } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { Button, Modal } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import http from '../../../../resources/http';
import Signup from '../../../../auth/pages/Signup';

const ApproveAccount = () => {
  const [val, setVal] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [userType, setUsertype] = useState();
  const [status, setStatus] = useState();
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(!modal);
  const [data, setData] = useState({});
  const baseURL =
    'https://cyberminds-backend.herokuapp.com/api/account/get-client-users';

  useEffect(() => {
    http
      .get(baseURL)
      .then((response) => {
        setData(response.data);
      })
      .then(
        (response) => {},
        (err) => {
          console.log('No Data To Show');
        }
      )
      .catch((err) => {
        return false;
      });
  }, []);
  console.log(data, 'clients');
  const DisplayData = Object.entries(data).map(([key, users]) => {
    return (
      <>
        <tr key={key}>
          <td>{users.id}</td>
          <td>{users.username}</td>
          <td>{users.email}</td>
          <td>{users.name}</td>
          <td>{users.user_type}</td>

          <td>
            {users.status}

            {/* <button
            className="outline color bg"
            onClick={() =>
              http.patch("http://127.0.0.1:8000/api/account/activate-user", {
                user_id: users.id,
              })
            }
          >
          </button> */}
          </td>
          <td>
            <IconButton
              onClick={() => {
                setVal(users.id);
                setUsername(users.username);
                setEmail(users.email);
                setUsertype(users.user_type);
                setCompany(users.company_name);
                showModal();
              }}
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
  console.log(DisplayData, 'user info here');
  return (
    <div className="z-100 p-24">
      <div className="flex justify-end items-end mb-8">
        <Button
          variant="outline-success"
          className="flex justify-end items-end"
          onClick={() => showModal()}
        >
          <AddIcon />
          Add new
        </Button>{' '}
      </div>
      <div className="text-black">
        <div className="rounded overflow-hidden flex  justify-center items-center">
          <table className="GeneratedTables text-center">
            <thead>
              <tr className="text-md">
                <th>User ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Company Name</th>
                <th>User Type</th>
                <th>Status</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
      </div>
      <Modal show={modal} className="mt-1 ">
        <Modal.Header closeButton onClick={() => showModal()}>
          <Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button
            variant="secondary"
            // onClick={() => {
            //   http.put(
            //     'http://127.0.0.1:8000/api/account/update-client-user/'
            //     {
            //       old_password: 'ynwa2684',
            //       new_password: 'newpass2684',
            //     }
            //   );
            //   showModal();
            // }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              http.put(
                'http://127.0.0.1:8000/api/account/update-client-user/' + val,
                {
                  status: status,
                  email: email,
                  username: username,
                  user_type: userType,
                  company_name: company,
                }
              );
              showModal();
            }}
          >
            Save
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ApproveAccount;
