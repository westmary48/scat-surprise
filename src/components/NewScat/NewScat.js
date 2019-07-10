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

formFieldStringState = (name, e) => {
  const tempScat = { ...this.state.newScat };
  tempScat[name] = e.target.value;
  this.setState({ newScat: tempScat });
}

  sampleNameChange = e => this.formFieldStringState('sampleName', e);

  colorChange = e => this.formFieldStringState('color', e);

  weightChange = e => this.formFieldStringState('weight', e);

  locationChange = e => this.formFieldStringState('location', e);

  animalChange = e => this.formFieldStringState('animal', e);

  // sampleNameChange = (e) => {
  //   const tempScat = { ...this.state.newScat };
  //   tempScat['sampleName'] = e.target.value;
  //   this.setState({ newScat: tempScat });
  // }
  // colorChange = (e) => {
  //   const tempScat = { ...this.state.newScat };
  //   tempScat['color'] = e.target.value;
  //   this.setState({ newScat: tempScat });
  // }

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
            value= {newScat.sampleName}
            onChange = {this.sampleNameChange}
            />
            </div>
            <div className="form-group">
          <label htmlFor="color">Color</label>
            <input
            type="email"
            className="form-control"
            id="color"
            placeholder="brown"
            value= {newScat.color}
            onChange = {this.colorChange}
            />
            </div>
            <div className="form-group">
          <label htmlFor="weight">Weight</label>
            <input
            type="email"
            className="form-control"
            id="weight"
            placeholder="12g"
            value= {newScat.weight}
            onChange = {this.weightChange}
            />
            </div>
            <div className="form-group">
          <label htmlFor="animal">Animal</label>
            <input
            type="email"
            className="form-control"
            id="animal"
            placeholder="animal"
            value= {newScat.animal}
            onChange = {this.animalChange}
            />
            </div>
            <div className="form-group">
          <label htmlFor="location">Location</label>
            <input
            type="email"
            className="form-control"
            id="location"
            placeholder="location"
            value= {newScat.location}
            onChange = {this.locationChange}
            />
            </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewScat;
