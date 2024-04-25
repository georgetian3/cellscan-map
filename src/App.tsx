import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Map, APILoader,
  NavigationControl,
} from '@uiw/react-baidu-map';

const Demo = () => (
  <div style={{ width: '100%', height: '1000px', overflow: 'auto' }}>
    <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
      <Map zoom={13} style={{ height: 1000 }}>
      
        {/* <NavigationControl type={type} enableGeolocation showZoomInfo /> */}
        <NavigationControl
          enableGeolocation
          showZoomInfo
        />
      </Map>
    </APILoader>
  </div>
);


function App() {
  return <Demo></Demo>
}

export default App;
