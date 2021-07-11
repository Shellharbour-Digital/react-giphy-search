import { shallow } from 'enzyme';
import React from 'react';
import WithGifs from './with-gifs';

describe('WithGifs HOC', () => {
  const TestComponent = () => <div className='test' />;
  const WrappedComponent = WithGifs(TestComponent);
  const url = `www.mockurl.com`;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WrappedComponent dataSource={url} />);
  });

  it('expect componentDidUpdate and successful fetch', () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    const instance = wrapper.instance();
    instance.componentDidUpdate();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`www.mockurl.com`);
  });

  it('expect failed fetch', () => {
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`www.mockurl.com`);
  });
});
