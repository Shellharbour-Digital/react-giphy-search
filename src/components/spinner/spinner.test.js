import { shallow } from 'enzyme';
import React from 'react';
import Spinner from './spinner.component';

describe('Spinner component', () => {
  let wrapper = shallow(<Spinner />);

  it('expect to render Spinner component', ()  => {
    expect(wrapper).toMatchSnapshot();
  });
});
