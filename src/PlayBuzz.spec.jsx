import React from 'react';
import { shallow, mount } from 'enzyme';
import PlayBuzz from './PlayBuzz';

const sampleUrl = 'http://www.playbuzz.com/peepersc10/who-is-your-favorite-super-hero';
const setup = (url, load) => {
  if (load) {
    return mount(<PlayBuzz url={url} load={load} />);
  }
  return shallow(<PlayBuzz url={url} />);
};


describe('PlayBuzz Component', () => {
  test('render', () => {
    const wrapper = setup(sampleUrl);
    expect(wrapper.exists()).toBe(true);
  });

  test('render with load script', () => {
    const wrapper = setup(sampleUrl, true);
    expect(wrapper.exists()).toBe(true);
  });

  test('render nothing when no URL', () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.type()).toBe(null);
  });

  test('render a playbuzz wrapper', () => {
    const wrapper = setup(sampleUrl);
    expect(wrapper.find('.playbuzz').exists()).toBe(true);
  });

  test('render a pb_feed', () => {
    const wrapper = setup(sampleUrl);
    expect(wrapper.find('.pb_feed').exists()).toBe(true);
  });

  test('pb_feed show have a data-game attribute', () => {
    const wrapper = setup(sampleUrl);
    expect(wrapper.find('.pb_feed').prop('data-game')).toBe(sampleUrl);
  });
});
