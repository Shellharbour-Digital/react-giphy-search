import styled from 'styled-components';

export const GifList = styled.div`
  padding: 90px 15px 15px;

  @media screen and (max-width: 800px) {
    padding-top: 60px;
  }
`;

export const GifContainer = styled.div`
  columns: 5;
  column-gap: 15px;

  @media screen and (max-width: 800px) {
    columns: 3;
  }
`;

export const GifMessage = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

GifMessage.displayName = 'GifMessage';
