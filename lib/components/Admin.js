import React from 'react';
import firebase from '../firebase';
import { map } from 'lodash';

import AdminSpike from './AdminSpike';
import Spike from './Spike';

const Admin = ({ spikes, createSpike, updateSpike, deleteSpike }) => {

  let allSpikes = map(spikes, (spike) => {
    return <AdminSpike spike={spike} key={spike.key}
            updateSpike={updateSpike}
            deleteSpike={deleteSpike}/>
  })

  return (
    <div>
      <Spike createSpike={createSpike}/>
      <h1>Spikes</h1>
      {allSpikes}
    </div>
  )
}

export default Admin