import React, { Component } from 'react';
import './App.css';

import MainContainer from './components/mainContainer';
import DefaultButton from './components/button';
import SearchBox from './components/searchBox';
import FlexibleLayout from './components/flexibleLayout';
import DateSelection from './components/dateSelection';
import InputLabel from './components/label';
import MainHeader from './components/mainHeader';
import SongList from './components/songList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer>
          <MainHeader>Song by...</MainHeader>
          <FlexibleLayout column>
            <form>
              <FlexibleLayout column>
                <InputLabel>Arttist Name: </InputLabel>
                <SearchBox></SearchBox>
                <InputLabel>Select year: </InputLabel>
                <DateSelection type="date">
                  <option>Grapefruit</option>
                  <option>Lime</option>
                  <option>Coconut</option>
                  <option>Mango</option>                  
                </DateSelection>
                <DefaultButton>Search</DefaultButton>
              </FlexibleLayout>
            </form>
            <SongList>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </SongList>
          </FlexibleLayout>
        </MainContainer>
      </div>
    );
  }
}

export default App;
