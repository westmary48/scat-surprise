import React from 'react';

import './NewScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleName: '',
  animal: '',

};

class NewScat extends React.Component {
  state = {
    newScat: defaultScat,

  }

  sampleNameChange = (e) => {
    const tempScat = { ...this.state.newScat };
    tempScat['sampleName'] = e.target.value;
    this.setState({ newScat: tempScat });
  }

  render() {
    const { newScat } = this.state;
    return (
      <div className="NewSct">
        <h1>New Scat</h1>
        <form>
          <div className="form-group">
          <label htmlFor="sampleName">Sample Name</label>
            <input
            type="email"
            className="form-control"
            id="sampleName"
            placeholder="Sample Name"
            value= {this.sampleName}
            onChange = {this.sampleNameChange}
            />
            </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewScat;
