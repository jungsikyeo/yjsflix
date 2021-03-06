import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a {
      text-decoration: none;
      color: inherit;
    }
    * {
      box-sizing: border-box;
    }
    body {
      font-family: "Do Hyeon",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
      font-size: 17px;
      background-color: rgba(20, 20, 20, 1);
      color: white;
      padding-top: 50px;
    }
`;

export default globalStyles;
