import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: middle;
  svg {
    margin: auto;
    background: none;
    display: block;
    shape-rendering: auto;
    width: 200px;
    max-width: 50%;
    path {
      transform: scale(0.7000000000000001);
      transform-origin: 50px 50px;
    }
  }
`;
