import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: "Poppins", sans-serif;
    background: #f4f4f4;
    overflow-x: hidden;
}
a{
    text-decoration: none;
}
ul{
    list-style: none;
}
`
export default GlobalStyle