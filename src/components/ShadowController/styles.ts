import { Card, ClosestBackground, Secundaria, TextColor } from 'src/styles/components';
import styled from 'styled-components';

export const ShadowContainer = styled(Card)`
  align-self: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 15px;
  .hue-picker {
    margin: 15px 0;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const ShadowBox = styled.div`
  align-self: center;
  background-color: #fff;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  border-radius: 6px;
  position: relative;
  min-height: 180px;
  overflow: hidden;
`;
export const ShadowItem = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  position: absolute;
  bottom: 15px;
  background-color: ${Secundaria};
  top: 50%;
  transition: 0.2s;
  transform: translateY(-50%);
  box-shadow: ${(props) => props.title};
`;
export const ShadowBoxController = styled.div`
  padding: 0 15px;
  .MuiSlider-root {
    color: ${Secundaria};
  }
`;
export const Shadow = styled.div`
  background-color: ${ClosestBackground};
  padding: 15px;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  input {
    background: transparent;
    color: ${TextColor};
    border: none;
    font-size: inherit;
    text-align: center;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;
