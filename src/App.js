import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,action, comedy, trending, horror, romance, documentaries} from './urls';

function App() {
  return (
  <div>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={trending} title='Trending Now'/>
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={comedy} title='Comedy' isSmall/>
    <RowPost url={horror} title='Horror' isSmall/>
    <RowPost url={romance} title='Romance' isSmall/>
    <RowPost url={documentaries} title='Documentaries' isSmall/>
  </div>
  );
}

export default App;
