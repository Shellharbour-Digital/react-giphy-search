import styled from 'styled-components';

export const GifItem = styled.div`
  display: inline-block;
  margin: 0 0 15px;
  width: 100%;
`;

export const GifImg = styled.img`
  display: block;
  width: 100%;
  &:hover {
    opacity: 0.7;
  }
`;

export const GifLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const LoadingContainer = styled.div`
  height: ${props => props.height}px;
`;

GifImg.displayName = 'GifImg';
LoadingContainer.displayName = 'LoadingContainer';
