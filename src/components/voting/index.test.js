import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import VotingHOC from './';
import store from '../../store';

describe('VotingHOC', () => {
  let wrapper;

  beforeEach(() => {
    store.getState = () => ({
      peers: {},
      transactions: {
        pending: [],
        confirmed: [],
      },
      voting: {
        delegates: [
          { username: 'username1', publicKey: 'sample_key' },
        ],
        votes: {
          username1: { confirmed: true, unconfirmed: true, publicKey: 'sample_key' },
        },
      },
      account: {},
    });
    wrapper = mount(<Provider store={store}><VotingHOC /></Provider>);
  });

  it('should render Voting', () => {
    expect(wrapper.find('Voting')).to.have.lengthOf(1);
  });
});
