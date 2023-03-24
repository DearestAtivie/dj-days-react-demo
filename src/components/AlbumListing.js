import React from 'react'; //1 step
import styled from 'styled-components'; // 2 step but make sure you use npm install --save styled-components

const AlbumListing = (props) => {
    return (
    <>
    <StyledDiv>
     <Name>{props.AlbumName}</Name>
        <Artist>{props.AlbumArtist}</Artist>
     <Genre>{props.AlbumGenre}</Genre>
     </StyledDiv> 
    </>
    );

}
   


export default AlbumListing;

const Name = styled.h3`
text-align: center;
background-color: yellow;`

const Artist = styled.h3`
text-align: center;
background-color: pink;`

const Genre = styled.h3`
text-align: center;
background-color: orange;`

const StyledDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 70%;
    padding: 10px;
    background-color: aquamarine;
    margin: 0px auto 20px auto;
    `