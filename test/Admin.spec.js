import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';

import App from '../lib/components/App';
import Admin from '../lib/components/Admin';
import AdminSpike from '../lib/components/AdminSpike';
import mockUsers from './helpers/mockUsers';
import mockSpikes from './helpers/mockSpikes';

describe('application', () => {
  const wrapper = shallow(
    <Admin
      createSpike={(e) => this.createSpike(e)}
      spikes={mockSpikes}
      updateSpike={(spike, prop, value) => this.updateSpike(spike, prop, value)}
      deleteSpike={(spike) => this.deleteSpike(spike)}
      newAdmin={(email) => this.newAdmin(email)}
      removeAdmin={(index) => this.removeAdmin(index)}
      user={mockUsers[0]}
    />);

  context('shallow tests', () => {
    it('Admin component should exist', () => {
      expect(wrapper).to.exist;
    });

    it('should be rendered into a <section> container', () => {
      assert.equal(wrapper.type(), 'section');
    });

    it('should have a wrapper class name of "Admin"', () => {
      expect(wrapper.hasClass('Admin')).to.equal(true);
    });

    it('should have a default filter state of "all"', () => {
      expect(wrapper.state().filter).to.equal('all');
    });

    it('should have a default dateFilter state of "all"', () => {
      expect(wrapper.state().dateFilter).to.equal('all');
    });

    it('should have a default adminList state of false', () => {
      expect(wrapper.state().adminList).to.equal(false);
    });

    it('should render three AdminSpikes if three were submitted', () => {
      expect(wrapper.find('AdminSpike')).to.have.length(3);
    });
  });


  //   it('should have a default user of null', function() {
  //     expect(wrapper.state().user).to.equal(null);
  //   });
  //
  //   it('should have a default empty array of spikes', () => {
  //     expect(wrapper.state().spikes).to.deep.equal([]);
  //   });
  });
  //
  // context('mount tests', () => {
  //   const wrapper = mount(<Admin />);
  //
  //   it('has a section with class of SpikeCard', () => {
  //     assert.lengthOf(wrapper.find('SignIn'), 1);
  //   });
  // });
// });
