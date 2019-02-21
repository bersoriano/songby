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

  constructor(props){
    super(props);
    this.state = {
      song: "",
      years:[]
    }
  }

  searchSong = (event) => {
    this.setState({song: event.target.value});
    console.log("Searching for: " + this.state.song);

  }

  render() {
    return (
      <div className="App">
        <MainContainer>
          <MainHeader>Song by...</MainHeader>
          <FlexibleLayout column>
            <form>
              <FlexibleLayout column>
                <InputLabel>Arttist Name: </InputLabel>
                <SearchBox value={this.state.song} onChange={this.searchSong}></SearchBox>
                <InputLabel>Select year: </InputLabel>
                <DateSelection type="date"></DateSelection>
                <DefaultButton type="submit">Search</DefaultButton>
              </FlexibleLayout>
            </form>
            <FlexibleLayout column>
              <InputLabel>Results for {this.state.song} </InputLabel>
            </FlexibleLayout>
            <SongList>
              <li>Song 1</li>
              <li>Song 2</li>
              <li>Song 3</li>
            </SongList>
          </FlexibleLayout>
        </MainContainer>
      </div>
    );
  }
}

export default App;
