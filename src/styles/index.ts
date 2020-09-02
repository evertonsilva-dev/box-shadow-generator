import 'noty/lib/noty.css';
import 'noty/lib/themes/sunset.css';
import { createGlobalStyle } from 'styled-components';
import { FuhthestBackground, Secundaria, TextColor } from './components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  body{
    background-color: ${FuhthestBackground};
    color:${TextColor};
    margin:0;
    font-family: 'Quantico', sans-serif;
    position: relative;
    overflow-x:hidden;
    &:before{
      content:"";
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0px 0 100vh 100vw;
      border-color: transparent transparent transparent ${Secundaria};
      z-index:-1;            
    }

  }
  *, *::before,*::after{
    box-sizing:border-box;
  }
  @keyframes animate {
    from{
      bottom:0;
    }
    to{
      bottom:calc(100% - 60px);
    }
  }

  #ninja{
    color:black;
    visibility:hidden;
  }
`;
export default GlobalStyle;
