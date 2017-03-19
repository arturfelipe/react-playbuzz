import React from 'react';
import { shallow } from 'enzyme';
import PlayBuzz from './PlayBuzz';

const sampleUrl = 'http://www.playbuzz.com/peepersc10/who-is-your-favorite-super-hero';
const setup = url => shallow(<PlayBuzz url={url} />);


describe('PlayBuzz Component', () => {
  test('render', () => {
    const wrapper = setup(sampleUrl);
    expect(wrapper.exists()).toBe(true);
  });
});
