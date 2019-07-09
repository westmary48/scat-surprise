import React from 'react';

import './NewScat.scss';

class NewScat extends React.Component {
  render() {
    return (
      <div className="NewSct">
        <h1>New Scat</h1>
        <form>
          <div className="form-group">
          <label htmlFor="sampleName">Sample Name</label>
            <input type="email" className="form-control" id="sampleName" placeholder="Sample Name"/>
            </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewScat;
