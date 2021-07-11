import { shallow } from 'enzyme';
import React, { Component } from 'react';
import App from './App';

describe('Spinner component', () => {
  let wrapper = shallow(<App />);

  it('expect to render App', ()  => {
    expect(wrapper).toMatchSnapshot();
  });

  it('expect to handleChange', () => {
    wrapper.instance().handleChange({ target: { value: 'test' }});
    expect(wrapper.state().url).toEqual(`https://api.giphy.com/v1/gifs/search?api_key=AscSI3FnS69DmOLqAbNa4GZZQvEeNWil&q=test&limit=50&offset=0&rating=g&lang=en`);
    wrapper.instance().handleChange({ target: { value: '' }});
    expect(wrapper.state().url).toEqual(`https://api.giphy.com/v1/gifs/trending?api_key=AscSI3FnS69DmOLqAbNa4GZZQvEeNWil&limit=50&rating=g`);
  });
});
