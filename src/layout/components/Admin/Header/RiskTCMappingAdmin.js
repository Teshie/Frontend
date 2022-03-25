import React, { Component } from 'react';
import DropDownSelector from './DropDownSelector.js';
import IndustrySelector from './IndustrySelector';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewTcMapping from '../../SuperAdmin/ApproveAccount/ViewTcMapping.js';
import http from '../../../../resources/http.js';
export class RiskTCMappingAdmin extends Component {
  submitConfirm = () => {
    confirmAlert({
      message: 'Are you sure to delete?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.handleUploadFileDelete(),
        },
        {
          label: 'No',
        },
      ],
    });
  };
  constructor() {
    super();
    this.state = {
      showHide: false,
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }
  state = {
    file: null,
  };
  handleFile(e) {
    let file = e.target.files[0];
    this.setState({ file: file });
  }
  handleUploadFile(e) {
    let file = this.state.file;
    console.log(this.state, 'THE STATE ====$$$$');

    let formData = new FormData();
    formData.append('file', file);
    formData.append('businuss impact analysis', 'financial');

    http({
      url: 'https://cyberminds-backend.herokuapp.com/api/business_process/upload-business-impact-excel',
      method: 'POST',
      mode: 'cors',
      // headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    }).then(
      (response) => {
        alert('File uploaded Sesscessfully');
      },
      (err) => {
        console.log('File already exist');
      }
    );
  }

  handleUploadFileCatalog(e) {
    let file = this.state.file;
    console.log(this.state, 'THE STATE ====$$$$');

    let formData = new FormData();
    formData.append('file', file);
    formData.append('business_process', 4);
    formData.append('businuss impact analysis', 'financial');

    http({
      url: 'https://cyberminds-backend.herokuapp.com/api/threat-catalog/upload-threat-catalog-excel',
      method: 'POST',
      mode: 'cors',
      // headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    }).then(
      (response) => {
        alert('File uploaded Sesscessfully');
      },
      (err) => {
        console.log('File already exist');
      }
    );
  }
  handleUploadFileTcMapping(e) {
    let file = this.state.file;
    console.log(this.state, 'THE STATE ====$$$$');

    let formData = new FormData();
    formData.append('file', file);
    formData.append('businuss impact TC Mapping', 'financial');

    http({
      url: 'https://cyberminds-backend.herokuapp.com/api/business_process/upload-risk-tc-maping-excel',
      method: 'POST',
      mode: 'cors',
      // headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    }).then(
      (response) => {
        alert('File uploaded Sesscessfully');
      },
      (err) => {
        console.log('File already exist');
      }
    );
  }
  handleUploadFileDelete(e) {
    let file = this.state.file;
    console.log(this.state, 'THE STATE ====$$$$');

    let formData = new FormData();
    formData.append('file', file);
    formData.append('businuss impact analysis', 'financial');

    http({
      url: 'https://cyberminds-backend.herokuapp.com/api/business_process/business-impact',
      method: 'DELETE',
      mode: 'cors',
      // headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    }).then(
      (response) => {
        alert('Deleted Sesscessfully');
      },
      (err) => {
        console.log('Error While Deleting...');
      }
    );
  }
  render() {
    return (
      <>
        <div className=" flex flex-col space-y-6 justify-center mt-10 items-center">
          <h4>Uplaod Risk TC-Mapping File</h4>

          {/* <h1>Upload Business Impact Analysis File</h1> */}

          <div className="flex space-x-4">
            <input
              type="file"
              name="file"
              onChange={(e) => this.handleFile(e)}
            />
          </div>
          <div class="flex space-x-4">
            {/* <button
              className="color bg p-2 rounded-md"
              type="button"
              onClick={(e) => this.handleUploadFileCatalog(e)}
            >
              Upload Catalog
            </button> */}
            <button
              className="color bg p-2 rounded-md"
              type="button"
              onClick={(e) => this.handleUploadFileTcMapping(e)}
            >
              Clear and Upload new file
            </button>
            {/* <button
              className="color bg p-2 rounded-md"
              type="button"
              onClick={(e) => this.handleUploadFile(e)}
            >
              Uplaod Business Impact Analysis
            </button>
            <button
              className="color bg p-2 rounded-md"
              type="button"
              onClick={(e) => this.submitConfirm(e)}
            >
              Delete
            </button> */}
          </div>
        </div>

        <ViewTcMapping />
      </>
    );
  }
}

export default RiskTCMappingAdmin;
