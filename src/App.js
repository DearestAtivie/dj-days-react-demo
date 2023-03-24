
import './App.css';
import Header from './components/Header';
import AlbumMessage from './components/AlbumMessage';
import AlbumListing from './components/AlbumListing';
import Form from './components/Form'
import NiceButton from './components/Button';

function App() {
  return (
    <div>
     <Header HeaderContent="DJ Days React Demo"/>
     <AlbumMessage MessageContent="You need more albums"/>

     
     <AlbumListing
     AlbumName="Lemonade"
     AlbumArtist="Beyonce"
     AlbumGenre="RnB"
     />
  
     <AlbumListing
     AlbumName="DAMN."
     AlbumArtist="Kendrick Lamar"
     AlbumGenre="Hip Hop"
     />
     <AlbumListing
     AlbumName="Back to Black"
     AlbumArtist="Amy Winehouse"
     AlbumGenre="Pop"
     />
     <Form/>
     
     

    </div>
  );
}

export default App;
