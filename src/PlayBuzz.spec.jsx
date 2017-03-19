import React from 'react';
import { shallow } from 'enzyme';
import PlayBuzz from './PlayBuzz';

const sampleUrl = 'http://www.playbuzz.com/peepersc10/who-is-your-favorite-super-hero';

const setup = (propsOverrides) => {
  const props = Object.assign({ url: sampleUrl }, propsOverrides);
  const wrapper = shallow(<PlayBuzz {...props} />);
  return {
    wrapper,
    embed: wrapper.find('.pb_feed'),
    container: wrapper.find('.playbuzz'),
  };
};

describe('PlayBuzz Component', () => {
  test('render', () => {
    const { wrapper } = setup();
    expect(wrapper.exists()).toBe(true);
  });

  test('render with load script', () => {
    const { wrapper } = setup({ load: true });
    expect(wrapper.exists()).toBe(true);
  });

  test('render nothing when no URL', () => {
    const { wrapper } = setup({ url: '' });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.type()).toBe(null);
  });

  test('render a container wrapper', () => {
    const { container } = setup();
    expect(container.exists()).toBe(true);
  });

  describe('Embed element', () => {
    test('render', () => {
      const { embed } = setup();
      expect(embed.exists()).toBe(true);
    });

    test('should have a data-game attribute', () => {
      const { embed } = setup();
      expect(embed.prop('data-game')).toBe(sampleUrl);
    });

    test('should have a data-height attribute', () => {
      const { embed } = setup({
        options: {
          height: 250,
        },
      });
      expect(embed.prop('data-height')).toBe(250);
    });
  });
});
