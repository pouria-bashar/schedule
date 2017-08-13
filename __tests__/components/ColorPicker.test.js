import React from 'react';
import { ColorPicker } from 'components';
import { shallow } from 'enzyme';
import { colors } from 'appConstants';

test('Renders correct number of colors', () => {
  const wrapper = shallow(
    <ColorPicker />
  );
  expect(wrapper.find('button').length).toEqual(colors.length);
  expect(wrapper.state()).toEqual({ backgroundColor: colors[0] });
});

test('On click changes the state.backgroundColor to selected color', () => {
  const wrapper = shallow(
    <ColorPicker onChange={(c) => {}} />
  );

  wrapper.find('button').at(3).simulate('click');
  expect(wrapper.state()).toEqual({ backgroundColor: colors[3] });

  wrapper.find('button').at(2).simulate('click');
  expect(wrapper.state()).toEqual({ backgroundColor: colors[2] });
});
