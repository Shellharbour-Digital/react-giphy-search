import styled from 'styled-components';

import { DebounceInput } from 'react-debounce-input';

export const SearchInput = styled(DebounceInput)`
  display: block;
  margin: 0 auto;
  text-align: center;
  width: 40%;
  height: 40px;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    width: 75%;
    height: 30px;
    font-size: 16px;
  }
`;

export const SearchContainer = styled.div`
  position: fixed;
  width: 100%;
  background-color: black;
  padding: 25px 0;
  z-index: 1;

  @media screen and (max-width: 800px) {
    padding: 15px 0;
  }
`;
