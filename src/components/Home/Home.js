import React from 'react';

import firebase from 'firebase/app';

import 'firebase/auth';

import scatsData from '../../helpers/data/scatsData';
import ScatCard from '../ScatCard/ScatCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    scats: [],
  }

  componentDidMount() {
    const { uid } = firebase.auth().currentUser;
    scatsData.getMyScats(uid)
      .then(scats => this.setState({ scats }))
      .catch(err => console.error('could not get scats', err));
  }

  render() {
    const makeScatCards = this.state.scats.map(scat => (
      <ScatCard
      key = {scat.id}
      scat = {scat}
      />
    ));

    return (
      <div className="Home">
        <h1>Home</h1>
        {makeScatCards}
      </div>
    );
  }
}

export default Home;
