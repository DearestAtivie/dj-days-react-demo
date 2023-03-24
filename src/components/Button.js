import React from 'react'; //1 step
import styled from 'styled-components'; // 2 step but make sure you use npm install --save styled-components

function NiceButton (props) {
    return (
        <Button type="button">
            Click here! Yay!
        </Button>
    );


}

export default NiceButton

const Button = styled.button`
background-color: purple
`