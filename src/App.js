import React from 'react';
import youtube from './api/youtube'
import { SearchBar, VideoList, VideoDetail } from "./Components"


import { Grid } from '@material-ui/core';


function App() {
  return (
    <Grid justify="center" container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail />
          </Grid>
          <Grid item xs={4}>
            {/* VIDEO LIST */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
