import React from 'react'; //1 step
import styled from 'styled-components'; // 2 step but make sure you use npm install --save styled-components

const Header = (props) => {
    return(
        <>
        <HeaderText>{props.HeaderContent}</HeaderText>
        
        </>
    );


}

export default Header;

const HeaderText = styled.h1`
text-align: center;
background-color: blue;
`
