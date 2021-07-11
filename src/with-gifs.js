import React from 'react';

const withGifs = WrappedComponent => {

  class WithGifs extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        gifs: [],
        pagination: [],
        meta: [],
      };
    }

    fetchGifs = async () => {
      try {
        const gifsResponse = await fetch(this.props.dataSource);
        const gifs = await gifsResponse.json();

        this.setState({
          gifs: gifs.data,
          pagination: gifs.pagination,
          meta: gifs.meta
        });

      } catch (error) {
        console.log(error);
      }
    }

    componentDidMount() {
        this.fetchGifs();
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.fetchGifs();
      }
    }

    render() {
      const { dataSource, ...otherProps } = this.props;

      return <WrappedComponent
        gifs={this.state.gifs}
        pagination={this.state.pagination}
        meta={this.state.meta}
        {...otherProps}
      />
    }
  }

  return WithGifs;
}

export default withGifs;
