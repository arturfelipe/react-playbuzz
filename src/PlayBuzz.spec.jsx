import React from 'react';
import { shallow } from 'enzyme';
import decamelize from 'decamelize';
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
    expect(wrapper.exists()).toBeTruthy();
  });

  test('render with load script', () => {
    const { wrapper } = setup({ load: true });
    expect(wrapper.exists()).toBeTruthy();
  });

  test('render nothing when no URL', () => {
    const { wrapper } = setup({ url: '' });
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.type()).toBe(null);
  });

  test('render a container wrapper', () => {
    const { container } = setup();
    expect(container.exists()).toBeTruthy();
  });

  describe('Embed element', () => {
    test('render', () => {
      const { embed } = setup();
      expect(embed.exists()).toBeTruthy();
    });

    test('should have a game attribute', () => {
      const { embed } = setup();
      expect(embed.prop('data-game')).toBe(sampleUrl);
    });

    describe('Default attributes', () => {
      test('should not have a height attribute', () => {
        const { embed } = setup();
        expect(embed.prop('data-height')).toBeUndefined();
      });

      const testDefaultAttributes = (attribute) => {
        test(`should have a ${attribute} attribute as false`, () => {
          const { embed } = setup();
          expect(embed.prop(`data-${attribute}`)).toBe(false);
        });
      };

      testDefaultAttributes('recommend');
      testDefaultAttributes('game-info');
      testDefaultAttributes('comments');
      testDefaultAttributes('shares');
    });

    describe('Setting attributes', () => {
      test('should have a height attribute', () => {
        const { embed } = setup({ options: { height: 250 } });
        expect(embed.prop('data-height')).toBe(250);
      });

      const testSettingAttributes = (attribute) => {
        const attr = decamelize(attribute, '-');
        const options = {};

        test(`should not have a ${attr} attribute when set to true`, () => {
          options[attribute] = true;
          const { embed } = setup({ options });
          expect(embed.prop(`data-${attr}`)).toBeUndefined();
        });

        test(`should have a ${attr} attribute as false when set to false`, () => {
          options[attribute] = false;
          const { embed } = setup({ options: { recommend: false } });
          expect(embed.prop(`data-${attr}`)).toBe(false);
        });
      };

      testSettingAttributes('recommend');
      testSettingAttributes('gameInfo');
      testSettingAttributes('comments');
      testSettingAttributes('shares');
    });
  });
});
