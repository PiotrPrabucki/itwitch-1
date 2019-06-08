import React from 'react';
import { Header } from './components/Header'
import {StreamerInfo} from './components/streamerInfo'
function App() {
  return (
    <div>
      <Header/>
      <div className="container mt-2">
        <StreamerInfo nick="asda" stream_title="aslds;alk" view_count="1400003"/>
      </div>
    </div>
  );
}

export default App;
