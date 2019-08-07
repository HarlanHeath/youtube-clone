import React from 'react';

import youtube from './api/youtube'

import SearchBar from "./Components/SearchBar"
import VideoList from "./Components/VideoList"
import VideoDetail from "./Components/VideoDetail"

import { Grid } from '@material-ui/core';





class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: " "/* past my api key here */,
        q: searchTerm
      }
    })
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }

  render() {
    const { selectedVideo } = this.state
    return (
      <Grid justify="center" container spacing={10} >
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail vdeo={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              {/* VIDEO LIST */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}


export default App;
