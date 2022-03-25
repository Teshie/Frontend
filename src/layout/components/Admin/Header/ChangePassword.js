import React, { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import http from '../../../../resources/http';
import Redirect from './../../../../Redirect/Redirect';
const baseURL =
  'http://127.0.0.1:8000/api/business_process/get-my-business-process';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const submit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      http
        .put('http://127.0.0.1:8000/api/account/change-password', {
          old_password: oldPassword,
          new_password: newPassword,
        })
        .then(
          (response) => {
            alert('Password Changed Successfully! Please Login Again!');
            localStorage.clear();
            window.location.reload();
            <Redirect to="/" />;
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      alert('Confirm password does not match');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-36">
      <Form>
        <h2 className="mb-3">Reset Your Password</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            type="password"
            placeholder="Enter Old Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            placeholder="Enter New Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>

        <button
          className="flex mx-16  mt-10 bg color button-signup justify-center items-center "
          type="submit"
          onClick={(e) => {
            submit(e);
            // submit();
          }}
        >
          Reset
        </button>
      </Form>
    </div>
  );
};

export default ChangePassword;
