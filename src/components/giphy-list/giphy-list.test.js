import { mount } from 'enzyme';
import React from 'react';
import GiphyList from './giphy-list.component';

describe('GiphyList component', () => {
  const mockPropsSuccess = {
    meta: {
      msg: 'mockMsg',
      status: 200
    },
    gifs: [{
      id: 'mockId',
      title: 'mockTitle',
      url: 'www.mockurl.com',
      images: {
        fixed_width: {
          url: 'www.mockurlfixedwidth.com',
          height: 200
        }
      }
    }]
  };

  const mockPropsFailure = {
    meta: {
      msg: 'mockMsg',
      status: 500
    }
  };

  const mockPropsNoResults = {
    meta: {
      msg: 'mockMsg',
      status: 200
    },
    gifs: []
  };

  let wrapper;

  it('expect to render GiphyList component', ()  => {
    wrapper = mount(<GiphyList {...mockPropsSuccess} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('expect to show error if status !==200', () => {
    wrapper = mount(<GiphyList {...mockPropsFailure} />);
    expect(wrapper.exists('GifMessage')).toBe(true);
  });

  it('expect to show no results message', () => {
    wrapper = mount(<GiphyList {...mockPropsNoResults} />);
    expect(wrapper.exists('GifMessage')).toBe(true);
  })
});
