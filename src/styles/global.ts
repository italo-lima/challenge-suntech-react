import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f5f5f5;
    color: #000;
    -webkit-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }
`;
