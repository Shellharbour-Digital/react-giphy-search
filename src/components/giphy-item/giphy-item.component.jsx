import React from 'react';

import Spinner from '../spinner/spinner.component';

import {
  GifItem,
  GifImg,
  GifLink,
  LoadingContainer
} from './giphy-item.styles';

class GiphyItem extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <GifItem>
        {
          this.state.loading ? (
            <LoadingContainer height={this.props.height}>
              <Spinner />
            </LoadingContainer>
          ) : (
            null
          )
        }
        <GifLink href={this.props.url} target='_blank'>
        <GifImg
          style={this.state.loading ? { display: 'none' } : {}}
          src={this.props.src}
          alt={this.props.alt}
          onLoad={() => this.setState({ loading: false })}
        />
        </GifLink>
      </GifItem>
    );
  }
}

export default GiphyItem;
