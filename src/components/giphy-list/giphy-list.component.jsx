import React from 'react';

import withGifs from '../../with-gifs';

import GiphyItem from '../giphy-item/giphy-item.component';

import { GifList, GifContainer, GifMessage } from './giphy-list.styles';

const GiphyList = ({ gifs, meta }) => (
  <GifList>
    { meta.status !== 200 && <GifMessage>{meta.msg}: {meta.status}</GifMessage> }
    <GifContainer>
      {
        gifs.length < 1 && meta.status === 200 ? (
          <GifMessage>No results found. Try searching for something else!</GifMessage>
        ) : (
          gifs.map(gif => (
            <GiphyItem key={gif.id} src={gif.images.fixed_width.url} alt={gif.title} height={gif.images.fixed_width.height} url={gif.url} />
          ))
        )
      }
    </GifContainer>
  </GifList>
);

export default withGifs(GiphyList);
