import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import http from '../../../../resources/http.js';
import ViewATCmapping from './../../SuperAdmin/ApproveAccount/ViewATCmapping';
export class UploadATCmapping extends Component {
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
  handleUploadFileATCMapping(e) {
    let file = this.state.file;
    console.log(this.state, 'THE STATE ====$$$$');

    let formData = new FormData();
    formData.append('file', file);
    formData.append('businuss impact TC Mapping', 'financial');

    http({
      url: 'https://cyberminds-backend.herokuapp.com/api/business_process/upload-atc-maping-excel',
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
      url: 'https://cyberminds-backend.herokuapp.com/api/business_process/delete_atc_mapping',
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
          <h4>Uplaod ATC-Mapping File</h4>

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
              onClick={(e) => this.handleUploadFileATCMapping(e)}
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

        <ViewATCmapping />
      </>
    );
  }
}

export default UploadATCmapping;
