import { shallow } from 'enzyme';
import React from 'react';
import {SearchBox} from './search-box.component';

describe('SearchBox component', () => {
  let wrapper = shallow(<SearchBox />);

  it('expect to render SearchBox component', ()  => {
    expect(wrapper).toMatchSnapshot();
  });
});
