import React, { Component } from 'react';

import { SearchBox } from './components/search-box/search-box.component';
import GiphyList from './components/giphy-list/giphy-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      url: 'https://api.giphy.com/v1/gifs/trending?api_key=AscSI3FnS69DmOLqAbNa4GZZQvEeNWil&limit=50&rating=g'
    };
  }

  handleChange = e => {
    e.target.value === '' ? (
      this.setState({
        url: `https://api.giphy.com/v1/gifs/trending?api_key=AscSI3FnS69DmOLqAbNa4GZZQvEeNWil&limit=50&rating=g`
      })
    ) : (
      this.setState({
        url: `https://api.giphy.com/v1/gifs/search?api_key=AscSI3FnS69DmOLqAbNa4GZZQvEeNWil&q=${e.target.value}&limit=50&offset=0&rating=g&lang=en`
      })
    )
  }

  render() {
    const { url } = this.state;
    return (
      <div className='App'>
        <SearchBox
          placeholder='🔎 search gifs'
          handleChange={this.handleChange}
          debounceTimeout={300}
        />
        <GiphyList
          dataSource={url}
        />
      </div>
    );
  }
}

export default App;
