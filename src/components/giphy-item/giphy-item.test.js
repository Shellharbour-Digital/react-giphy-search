import { shallow } from 'enzyme';
import React from 'react';
import GiphyItem from './giphy-item.component';
import 'jest-styled-components';

describe('GiphyItem component', () => {
  const mockProps = {
    img: 'mock.png',
    alt: 'mock image',
    url: 'www.mockurl.com',
    height: 200
  }

  let wrapper = shallow(<GiphyItem {...mockProps} />);

  it('expect to render GiphyItem component', ()  => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expect LoadingContainer height to be props.height value', () => {
    expect(wrapper.find('LoadingContainer').prop('height')).toEqual(200);
    expect(wrapper.find('LoadingContainer')).toHaveStyleRule('height', '200px');
  });

  it('correctly sets loading state to false when GifImg has loaded', () => {
    wrapper.find('GifImg').props().onLoad();
    expect(wrapper.state()).toEqual({ loading: false });
  });
});
